import Testimonials from "@/views/home/testimonials";
import Services from "@/views/home/services";
import Portfolio from "@/views/home/portfolio";
import PlayGrounds from "@/views/home/play-grounds";
import Hero from "@/views/home/hero";
import FloatingButton from "@/views/home/floating-button";
import FeaturedProjects from "@/views/home/featured-projects";
import Faq from "@/views/home/faq";
import Clients from "@/views/home/clients";
import AgileProcess from "@/views/home/agile-process";
import About from "@/views/home/about";
import { homeMetadata } from "@/metadata/home";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return homeMetadata[locale] ?? homeMetadata.en;
}

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Portfolio />
      <PlayGrounds />
      <Services />
      <FeaturedProjects />
      <AgileProcess />
      <Clients />
      <Testimonials />
      <Faq />
      <FloatingButton />
    </main>
  );
}
