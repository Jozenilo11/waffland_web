import React from "react";
import Header from "@/components/waffland/Header";
import Hero from "@/components/waffland/Hero";
import About from "@/components/waffland/About";
import Menu from "@/components/waffland/Menu";
import HowItWorks from "@/components/waffland/HowItWorks";
import Testimonials from "@/components/waffland/Testimonials";
import Contact from "@/components/waffland/Contact";
import Footer from "@/components/waffland/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}