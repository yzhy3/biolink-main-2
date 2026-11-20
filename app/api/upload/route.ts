import { NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";
import { getSession } from "@/lib/auth";

const utapi = new UTApi();

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const rawType = String(formData.get("type") ?? "").trim().toLowerCase();
  const normalizedType = ["icon", "custom"].includes(rawType)
    ? "avatar"
    : rawType;

  if (!file || !["avatar", "background", "banner", "cursor"].includes(normalizedType)) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!process.env.UPLOADTHING_TOKEN) {
    return NextResponse.json(
      { error: "Uploads are not configured (missing UPLOADTHING_TOKEN)." },
      { status: 500 }
    );
  }

  const MAX_BYTES = 25 * 1024 * 1024;
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: `File is too large (${(file.size / 1048576).toFixed(1)} MB). Max is 25 MB.` },
      { status: 413 }
    );
  }

  const safeName = (file.name || "upload").replace(/[^\x20-\x7E]/g, "_").slice(0, 120) || "upload";
  const renamedFile = new File([file], safeName, { type: file.type });

  try {
    const response = await utapi.uploadFiles(renamedFile);

    if (response.error) {
      return NextResponse.json(
        { error: `Storage provider: ${response.error.message}` },
        { status: 500 }
      );
    }

    const uploadedUrl = response.data?.ufsUrl || response.data?.url;
    if (!uploadedUrl) {
      return NextResponse.json(
        { error: "Unexpected response from storage provider" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: uploadedUrl });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? `Upload failed: ${error.message}` : "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { url } = await req.json();
  if (!url || typeof url !== "string") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!process.env.UPLOADTHING_TOKEN) {
    return NextResponse.json(
      { error: "Uploads are not configured (missing UPLOADTHING_TOKEN)." },
      { status: 500 }
    );
  }

  try {
    // Las URLs de UploadThing tienen el formato: https://utfs.io o https://<appId>.ufs.sh/f/FILE_KEY
    const urlObj = new URL(url);
    const segments = urlObj.pathname.split("/").filter(Boolean);
    const key = segments[segments.length - 1];

    if (!key) {
      return NextResponse.json({ error: "Could not extract file key from URL" }, { status: 400 });
    }

    const result = await utapi.deleteFiles(key);

    if (!result.success) {
      return NextResponse.json(
        { error: "Deletion from storage provider failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
