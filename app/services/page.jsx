import { ContactBanner, PageIntro, ServiceCards } from "../../components/ui";
import { services } from "../../lib/content";

export const metadata = { title: "Academic Support Services", description: "Explore assignment guidance, research reports, coding help, exam prep, editing, and Turnitin similarity report review." };

export default function Services() {
  return <><PageIntro eyebrow="ACADEMIC SUPPORT" title="Services" description="Choose the kind of help you need with your university coursework."/>
    <section className="section wrap" aria-labelledby="services-heading"><h2 className="visually-hidden" id="services-heading">Explore services</h2><ServiceCards items={services}/></section>
    <div className="wrap bottom-space"><ContactBanner/></div>
  </>;
}
