import { connection } from "next/server";
import { Footer, Header } from "../components/ui";
import { siteName } from "../lib/content";
import "./globals.css";

export const metadata = {
  title: { default: siteName, template: `%s | ${siteName}` },
  description: "University assignment guidance, research and report feedback, coding help, exam preparation, and Turnitin similarity report review.",
};

export default async function RootLayout({ children }) {
  await connection();
  return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>;
}
