import { ContactBanner, Icon, PageIntro } from "../../components/ui";
import { subjects } from "../../lib/content";

export const metadata = { title: "Subjects", description: "Explore academic support for computer science, IT, mathematics, data, business, writing, and social sciences." };

export default function Subjects() {
  return <><PageIntro eyebrow="TOPICS WE COVER" title="Subjects" description="From debugging a program to planning a research report, find support for the topic you’re working on."/>
    <section className="section wrap" aria-label="Subject areas"><div className="subject-grid">{subjects.map(subject => <article className="service-card subject-card" key={subject.label}><span className={`service-icon icon-${subject.icon}`}><Icon name={subject.icon}/></span><h2>{subject.label}</h2><ul>{subject.topics.map(topic => <li key={topic}>{topic}</li>)}</ul></article>)}</div></section>
    <div className="wrap bottom-space"><ContactBanner/></div>
  </>;
}
