import React from "react";
import Hero from "src/components/hero/Hero";
import Accord from "src/components/accordion/Accord";
import Review from "src/components/review/Review";
import Contact from "src/components/contact/Contact";
import Footer from "src/components/footer/Footer";

function Home() {
  return (
    <div className="">
      <Hero />
      <div className="bg-light">
        <div className="px-6 mt-5">
          <Accord />
        </div>
      </div>
      <div className="bg-white px-6 mt-5">
        <Review />
      </div>
      <div className="px-6 mt-5">
        <Contact />
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
