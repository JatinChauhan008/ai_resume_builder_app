import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature"
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Feature/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </main>
  );
}