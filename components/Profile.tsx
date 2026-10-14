import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import type { Dictionary } from "@/lib/i18n/vi";
import type { Locale } from "@/lib/metadata";

export default function Profile({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <div id="top" className="overflow-x-hidden">
      <Header header={dict.header} languageSwitch={dict.languageSwitch} locale={locale} />
      <main>
        <Hero hero={dict.hero} />
        <Services services={dict.services} />
        <Projects projects={dict.projects} />
        <Experience experience={dict.experience} />
        <Skills skills={dict.skills} />
        <Process process={dict.process} />
        <About about={dict.about} />
        <Contact contact={dict.contact} />
      </main>
      <Footer footer={dict.footer} languageSwitch={dict.languageSwitch} locale={locale} />
    </div>
  );
}
