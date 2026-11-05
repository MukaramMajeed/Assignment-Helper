import Link from "next/link";
import { Icon, PageIntro } from "../components/ui";

export default function NotFound() {
  return <><PageIntro eyebrow="404 / PAGE UNAVAILABLE" title="Page unavailable" description="Explore the service directory to find the academic support you need."/><div className="wrap section"><Link className="button" href="/services">Browse services <Icon name="arrow" size={18}/></Link></div></>;
}
