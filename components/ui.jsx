import Link from "next/link";
import { instagram, whatsapp } from "../lib/content";

const drawings = {
  book: <><path d="M12 7c-2-2-5-2-9-2v14c4 0 7 0 9 2 2-2 5-2 9-2V5c-4 0-7 0-9 2Z"/><path d="M12 7v14"/></>,
  file: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Zm0 0v6h6M8 13h8m-8 4h6"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-2-15-4 18"/>,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
  spark: <><path d="M12 2c0 6-4 10-10 10 6 0 10 4 10 10 0-6 4-10 10-10-6 0-10-4-10-10Z"/></>,
  chart: <path d="M3 3v18h18M8 16v-4m5 4V8m5 8V5"/>,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 13h18m-11 0v2h4v-2"/></>,
  arrow: <path d="M4 12h15m-6-6 6 6-6 6"/>,
  external: <path d="M6 18 18 6M8 6h10v10"/>,
  check: <path d="m5 12 4 4L19 6"/>,
  chat: <><path d="M21 11.6a8.9 8.9 0 0 1-13 8L3 21l1.4-4.7A9 9 0 1 1 21 11.6Z"/><path d="M9 8c-1 2 3 6 5 6l1-1 2 1c-.3 1.5-1.3 2-2.5 2-3 0-7.5-4-7.5-7 0-1 .5-2 1.5-2Z"/></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,
};

export function Icon({ name, size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawings[name]}</svg>;
}

export function Brand() {
  return <Link className="brand" href="/"><span className="brand-mark"><Icon name="book" size={21}/></span><span>Assignment<span className="brand-accent">Helper</span></span></Link>;
}

export function Header() {
  return <header className="header"><div className="wrap nav">
    <Brand/>
    <nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/subjects">Subjects</Link><Link href="/contact">Contact</Link></nav>
    <a className="button button-small" href={whatsapp()}><Icon name="chat" size={17}/> WhatsApp</a>
  </div></header>;
}

export function Footer() {
  return <footer className="footer"><div className="wrap footer-inner">
    <div><Brand/><p>Academic support for university students.</p></div>
    <nav aria-label="Footer navigation"><Link href="/services">Services</Link><Link href="/subjects">Subjects</Link><Link href="/contact">Contact</Link><a href={instagram}>Instagram <Icon name="external" size={14}/></a></nav>
  </div></footer>;
}

export function ServiceCards({ items }) {
  return <div className="service-grid">{items.map(service => <Link key={service.slug} className="service-card" href={`/services/${service.slug}`}>
    <span className={`service-icon icon-${service.icon}`}><Icon name={service.icon}/></span>
    <span className="service-arrow"><Icon name="external" size={18}/></span>
    <h3>{service.label}</h3>
    <p>{service.summary}</p>
  </Link>)}</div>;
}

export function PageIntro({ eyebrow, title, description }) {
  return <section className="page-intro"><div className="wrap"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div></section>;
}

export function ContactBanner() {
  return <div className="contact-banner"><div><h2>Have a brief or deadline?</h2><p>Share what you’re working on and where you’re stuck.</p></div><Link className="button" href="/contact">Get in touch <Icon name="arrow" size={18}/></Link></div>;
}

export function StudyIllustration() {
  return <div className="hero-visual" aria-hidden="true">
    <span className="visual-index"><span/> STUDY DESK / 01</span>
    <span className="visual-corner">✳</span>
    <div className="paper-back"/>
    <div className="paper">
      <div className="paper-heading"><span>THE STUDY PLAN</span><Icon name="book" size={21}/></div>
      <div className="paper-title">Start with<br/>the brief<span>.</span></div>
      <div className="paper-line paper-line-long"/><div className="paper-line paper-line-short"/>
      <div className="paper-check"><span><Icon name="check" size={13}/></span> Understand the task</div>
      <div className="paper-check"><span><Icon name="check" size={13}/></span> Make a plan</div>
      <div className="paper-check"><span><Icon name="check" size={13}/></span> Review your work</div>
    </div>
    <div className="visual-tag"><span><Icon name="spark" size={19}/></span><div><strong>One step at a time</strong><small>Make the next step clear.</small></div></div>
  </div>;
}
