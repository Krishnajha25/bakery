import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Menu from "@/components/Menu";
import About from "@/components/About";
import HowToOrder from "@/components/HowToOrder";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import { pageSchema } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema()) }}
      />
      <Nav />
      <Hero />
      <Ticker />
      <Menu />
      <About />
      <HowToOrder />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
