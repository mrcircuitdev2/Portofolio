"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import FiveM from "@/components/FiveM";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

const Preloader = dynamic(() => import("@/components/Preloader"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const ParticleField = dynamic(() => import("@/components/ParticleField"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />
      <ParticleField />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee phrases={["UNITY", "VR", "C#", "GAMEPLAY", "MOVEMENT", "MADE BY CIRCUIT"]} />
        <About />
        <div className="section-divider" />
        <Skills />
        <Marquee phrases={["TRY IT", "TWEAK IT", "BREAK IT", "LEARN SOMETHING", "BUILD AGAIN"]} />
        <Experience />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <FiveM />
        <Marquee phrases={["FIVEM", "LUA", "CUSTOM FRAMEWORK EXPERIENCE", "SERVER PROJECTS", "CIRCUIT / CONNECTED IDEAS"]} />
        <Testimonials />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
