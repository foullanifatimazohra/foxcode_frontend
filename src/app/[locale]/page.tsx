import Services from "@/views/home/Services";
import Portfolio from "@/views/home/Portfolio";
import Hero from "@/views/home/Hero";
import About from "@/views/home/About";

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
