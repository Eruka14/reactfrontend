import { React, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import ContactEmail from "./components/ContactEmail";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  const heroRef = useRef(null);
  const analyticsRef = useRef(null);
  const contactRef = useRef(null);
  const pricingRef = useRef(null);

  return (
    <>
      <Navbar
        heroRef={heroRef}
        analyticsRef={analyticsRef}
        contactRef={contactRef}
        pricingRef={pricingRef}
      />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={analyticsRef}>
        <Analytics />
      </div>
      <div ref={contactRef}>
        <ContactEmail />
      </div>
      <div ref={pricingRef}>
        <Pricing />
      </div>
      <Footer />
    </>
  );
}

export default App;
