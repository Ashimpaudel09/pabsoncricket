import React from "react";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { PointsTable } from "./components/Pointstable/Pointstable";
import { Schedule } from "./components/Shedule/Shedule";
import { Teams } from "./components/Teams/Teams";
import { Sponsors } from "./components/Sponsors/Sponsors";
import { About } from "./components/About/About";
import { Gallery } from "./components/Gallery/Gallery";
import { Contact } from "./components/Contact/Contact";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <About />
      <Teams />
      <Schedule />
      <PointsTable />
      <Sponsors />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
