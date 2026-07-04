import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Menu from "@/components/Menu";
import About from "@/components/About";
import HowToOrder from "@/components/HowToOrder";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <Menu />
      <About />
      <HowToOrder />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}
