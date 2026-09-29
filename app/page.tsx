import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Work />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
