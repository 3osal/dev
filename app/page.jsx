"use client"
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Landing from "@/components/landing/Landing";
import Portofolio from "@/components/portofolio/Portofolio";
import Posts from "@/components/posts/Posts";
import Services from "@/components/services/Services";
import Skills from "@/components/skills/Skills";
import Social from "@/components/social/Social";
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'



export default function Home() {
  useEffect(()=> {
    Aos.init();
  },[])
  return (
  <>
  <Social />
  <Landing />
  <div  data-aos= 'fade-down'>
  <Services />
  </div>
  <div data-aos= 'fade-down'>
  <About />
  </div>
  <div data-aos = 'fade-down'>
  <Portofolio />
  </div>
  <div data-aos = 'fade-down'>
  <Posts />
  </div>
  <div data-aos = 'fade-down'>
  <Contact />
  </div>
  </>
  );
}
