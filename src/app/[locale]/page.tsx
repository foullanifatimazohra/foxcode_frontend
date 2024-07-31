import Services from "@/views/home/services";
import Portfolio from "@/views/home/portfolio";
import Hero from "@/views/home/hero";
import About from "@/views/home/about";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Services />
    </main>
  );
}
