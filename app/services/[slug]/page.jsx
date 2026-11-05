import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon, PageIntro } from "../../../components/ui";
import { services, turnitinGuide, whatsapp } from "../../../lib/content";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) return { title: "Service unavailable" };
  return { title: service.label, description: service.summary };
}

export default async function Service({ params }) {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) notFound();

  return <>
    <PageIntro eyebrow="ACADEMIC SUPPORT / SERVICES" title={service.label} description={service.intro}/>
    <div className="section wrap detail-grid">
      <section><Link href="/services" className="text-link">← All services</Link><h2>What we can cover</h2>
        <ul className="check-list">{service.items.map(item => <li key={item}><Icon name="check" size={19}/><span>{item}</span></li>)}</ul>
        {slug === "similarity-review" && <p className="note">A similarity score measures matched text. Review each match in context before drawing conclusions about plagiarism. <a href={turnitinGuide}>Read Turnitin’s student guide <Icon name="external" size={15}/></a></p>}
      </section>
      <aside className="side-panel"><span className={`service-icon icon-${service.icon}`}><Icon name={service.icon}/></span><h2>What to share</h2><p>{service.bring}</p><a className="button" href={whatsapp(service.label)}><Icon name="chat" size={18}/> Ask on WhatsApp</a></aside>
    </div>
  </>;
}
