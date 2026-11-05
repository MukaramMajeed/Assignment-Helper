import { Icon, PageIntro } from "../../components/ui";
import { instagram, whatsapp } from "../../lib/content";

export const metadata = { title: "Contact", description: "Contact Assignment Helper on WhatsApp at 0315 7184463 or on Instagram at @fatiii_ali123." };

export default function Contact() {
  return <><PageIntro eyebrow="GET IN TOUCH" title="Let’s talk about your brief." description="Tell us what you’re studying, when it’s due, and where you’d like help."/>
    <div className="section wrap detail-grid">
      <section aria-label="Contact channels" className="contact-methods">
        <article className="service-card contact-card"><span className="service-icon icon-shield"><Icon name="chat"/></span><h2>WhatsApp</h2><p>0315 7184463</p><a className="button" href={whatsapp()}><Icon name="chat" size={18}/> Chat on WhatsApp</a></article>
        <article className="service-card contact-card"><span className="service-icon icon-spark"><Icon name="instagram"/></span><h2>Instagram</h2><p>@fatiii_ali123</p><a className="button button-outline" href={instagram}>Open Instagram <Icon name="external" size={18}/></a></article>
      </section>
      <aside className="side-panel"><h2>What to include</h2><ul className="check-list">{["Your subject and course level", "The brief and any marking rubric", "Your deadline", "Your draft, notes, or code if relevant"].map(item => <li key={item}><Icon name="check" size={19}/><span>{item}</span></li>)}</ul></aside>
    </div>
  </>;
}
