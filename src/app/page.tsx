import { Nav, Hero, Problem, HowItWorks, Features, FAQ, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
