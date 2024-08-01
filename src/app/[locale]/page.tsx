import Services from "@/views/home/services";
import Portfolio from "@/views/home/portfolio";
import PlayGrounds from "@/views/home/play-grounds";
import Hero from "@/views/home/hero";
import FeaturedProjects from "@/views/home/featured-projects";
import AgileProcess from "@/views/home/agile-process";
import About from "@/views/home/about";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <PlayGrounds />
      <Services />
      <FeaturedProjects />
      <AgileProcess />
    </main>
  );
}
