"use client";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Meet from "./components/Meet";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Roadmap from "./components/Roadmap";
import Community from "./components/Community";

export default function Home() {
  return (
    <div>
      <div className="w-screen flex justify-center">
        <Navbar />
      </div>
      <div>
        <Meet />
      </div>
      <div className="h-screen">
        <About />
      </div>
      <div className="roadmap">
        <Roadmap />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Partners />
      </div>
      <div>
        <Community />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
