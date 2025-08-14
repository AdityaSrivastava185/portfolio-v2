import About from "@/components/About/About";
import Contactus from "@/components/Contactus/Contactus";
import Experience from "@/components/Expereince/Experience";
import HeroSection from "@/components/Hero/HeroSection";
import Miscellaneous from "@/components/Miscellaneous/Miscellaneous";
import Navbar from "@/components/Navbar/Navbar";
import Project from "@/components/Projects/Project";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="md:px-20 px-3 mb-20">
        <Navbar />
        <HeroSection/>
        <About />
        <Project />
        <Experience />
        <Miscellaneous />
        <Contactus />
      </div>
    </>
  );
}

