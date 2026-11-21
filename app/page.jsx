import Link from 'next/link';
import './feds-home.css';

const features = [
  { n: '01', title: 'Your profile, your identity', text: 'A clean personal page with your avatar, bio, social links and custom buttons — all in one place.', tag: 'PROFILE BUILDER' },
  { n: '02', title: 'Make it feel like yours', text: 'Glass cards, custom backgrounds, cursor effects, gradients, layouts and polished visual details.', tag: 'CUSTOMIZATION' },
  { n: '03', title: 'Badges that say more', text: 'Showcase profile badges, verification-style labels and creator achievements beside your name.', tag: 'BADGES & STATUS' },
  { n: '04', title: 'Your music, built in', text: 'Embed Spotify tracks, albums and playlists directly into your page with a native player.', tag: 'SPOTIFY PLAYER' },
  { n: '05', title: 'Know who visits', text: 'Understand profile views and link clicks with built-in analytics and activity insights.', tag: 'ANALYTICS' },
  { n: '06', title: 'Live widgets', text: 'Bring your Discord presence, Valorant stats, weather and local time into your profile.', tag: 'INTEGRATIONS' },
];

export default function LandingPage() {
  return <main className="feds-home">
    <div className="fh-glow fh-glow-one"/><div className="fh-glow fh-glow-two"/><div className="fh-grid"/>
    <header className="fh-nav"><Link href="/" className="fh-brand"><span className="fh-brand-mark">b.</span><span>biolink</span></Link><nav><a href="#features">Features</a><a href="#integrations">Integrations</a><a href="#about">About</a></nav><div className="fh-nav-actions"><Link href="/register?mode=login" className="fh-login">Log in</Link><Link href="/register" className="fh-button fh-button-small">Get started <span>↗</span></Link></div></header>
    <section className="fh-hero">
      <div className="fh-eyebrow"><span className="fh-live-dot"/> YOUR SPACE ON THE INTERNET</div>
      <h1>Your identity,<br/><span>beautifully connected.</span></h1>
      <p className="fh-lead">One link for everything that makes you, you. Build a profile that feels personal, expressive and unmistakably yours.</p>
      <div className="fh-hero-actions"><Link href="/register" className="fh-button">Create your page <span>↗</span></Link><a href="#features" className="fh-secondary">Explore features <span>↓</span></a></div>
      <div className="fh-preview-wrap"><div className="fh-preview-top"><span/><span/><span/><small>biolink.me/yourname</small><b>LIVE PREVIEW</b></div><div className="fh-preview"><div className="fh-preview-cover"/><div className="fh-preview-content"><div className="fh-avatar">Y</div><div className="fh-verified">✦ VERIFIED CREATOR</div><h3>yourname <span>✦</span></h3><p>Digital creator · Somewhere on Earth</p><p className="fh-bio">Building things, collecting moments, and sharing what I love.</p><div className="fh-socials"><i>◎</i><i>◉</i><i>♫</i><i>◈</i><i>↗</i></div><div className="fh-link-card"> <span>↗</span><strong>My website</strong><small>mywebsite.com</small></div><div className="fh-link-card"><span>◉</span><strong>Join my community</strong><small>discord.gg/community</small></div><div className="fh-music"><div className="fh-album">♫</div><div><b>Midnight City</b><small>M83 · Hurry Up, We're Dreaming</small></div><span className="fh-play">▶</span></div></div></div><div className="fh-float fh-float-badge">✦ Creator badge</div><div className="fh-float fh-float-stat"><b>2.4k</b><small>profile views</small></div></div>
      <div className="fh-trust"><span>MADE FOR YOUR DIGITAL LIFE</span><div><b>DISCORD</b><b>SPOTIFY</b><b>TWITCH</b><b>INSTAGRAM</b><b>YOUTUBE</b></div></div>
    </section>
    <section className="fh-section" id="features"><div className="fh-section-head"><div><div className="fh-kicker">EVERYTHING IN ONE PLACE</div><h2>More than a link.<br/><span>Your own corner of the internet.</span></h2></div><p>All the tools you need to create a profile that looks great, feels personal and brings your online world together.</p></div><div className="fh-feature-grid">{features.map((f)=><article className="fh-feature" key={f.n}><div className="fh-feature-top"><span>{f.n}</span><span>↗</span></div><div className="fh-feature-tag">{f.tag}</div><h3>{f.title}</h3><p>{f.text}</p></article>)}</div></section>
    <section className="fh-integrations" id="integrations"><div><div className="fh-kicker">CONNECTED TO YOUR WORLD</div><h2>Your favorite platforms.<br/><span>One beautiful profile.</span></h2><p>Bring your communities, music and activity together. Use widgets and embeds to make your page more than a list of links.</p><Link href="/register" className="fh-text-link">Build your profile <span>↗</span></Link></div><div className="fh-platform-grid"><div className="fh-platform spotify">♫<small>SPOTIFY</small></div><div className="fh-platform discord">◉<small>DISCORD</small></div><div className="fh-platform twitch">▣<small>TWITCH</small></div><div className="fh-platform youtube">▶<small>YOUTUBE</small></div><div className="fh-platform instagram">◎<small>INSTAGRAM</small></div><div className="fh-platform valorant">V<small>VALORANT</small></div></div></section>
    <section className="fh-bottom" id="about"><div className="fh-kicker">READY WHEN YOU ARE</div><h2>Make your link<br/><span>feel like you.</span></h2><p>Claim your username and start building your own space.</p><Link href="/register" className="fh-button">Get started for free <span>↗</span></Link></section>
    <footer className="fh-footer"><Link href="/" className="fh-brand"><span className="fh-brand-mark">b.</span><span>biolink</span></Link><span>Made for your digital identity.</span><div><Link href="/help">Help</Link><Link href="/register?mode=login">Log in</Link><Link href="/register">Sign up</Link></div></footer>
  </main>;
}
