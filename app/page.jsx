import Link from "next/link";
import { ContactBanner, Icon, ServiceCards, StudyIllustration } from "../components/ui";
import { faqs, services, whatsapp } from "../lib/content";

export default function Home() {
  return <>
    <section className="hero"><div className="wrap hero-grid">
      <div className="hero-copy">
        <span className="eyebrow hero-eyebrow"><span/> UNIVERSITY STUDY SUPPORT</span>
        <h1>Stuck on an<br/>assignment<span>?</span></h1>
        <p>Get practical help with university assignments, research reports, coding, and exam prep. Bring your brief and we’ll work out the next step together.</p>
        <div className="hero-actions"><Link href="/services" className="button">Explore services <Icon name="arrow" size={19}/></Link><a className="button button-outline" href={whatsapp()}><Icon name="chat" size={19}/> Chat on WhatsApp</a></div>
      </div>
      <StudyIllustration/>
    </div></section>

    <section className="section wrap" id="services">
      <div className="section-heading"><div><span className="eyebrow">01 / SERVICES</span><h2>Find the help you need.</h2></div><p>Start with whatever is holding you up, from the first outline to the final revision.</p></div>
      <ServiceCards items={services}/>
    </section>

    <section className="process"><div className="section wrap">
      <div className="section-heading"><div><span className="eyebrow">02 / HOW IT WORKS</span><h2>From brief to next steps.</h2></div></div>
      <ol className="steps">
        <li><span>01</span><h3>Share the brief</h3><p>Send the topic, rubric, deadline, and the part you’re working on.</p></li>
        <li><span>02</span><h3>Agree on the scope</h3><p>Discuss what kind of support you need and confirm the price and timing.</p></li>
        <li><span>03</span><h3>Work through it</h3><p>Use targeted explanations and feedback to revise your own work.</p></li>
      </ol>
    </div></section>

    <section className="section wrap faq-grid"><div><span className="eyebrow">03 / FAQ</span><h2>Good to know.</h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
    <div className="wrap bottom-space"><ContactBanner/></div>
  </>;
}
