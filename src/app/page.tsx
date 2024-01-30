"use client";

import About from "./components/About";
import Features from "./components/Features";
import Meet from "./components/Meet";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Roadmap from "./components/Roadmap";
import Topbar from "./components/Topbar";

export default function Home() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div>
        <Meet />
      </div>
      <div className="h-screen">
        <About />
      </div>
      <div className="h-screen">
        <Roadmap />
      </div>
      <div className="h-screen">
        <Features />
      </div>
      <div className="h-screen">
        <Products />
      </div>
    </div>
  );
}
