"use client";
import Link from "next/link";
import { Button } from './ui/button';
import Image from "next/image";
import React, { useEffect, useRef } from "react";


const HeroSection = () => {
    const imageRef = useRef(null);

      useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-40 pb-20 px-4">
        <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
                Presenting Team 7 <br /> Personal finance
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Here should be some descrition ahaha bla bla bla bla bla
            </p>
            <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Lets goooooooo!!!!
            </Button>
          </Link>

            <Link href="https://github.com/ezizbagshiyev/Team7">
            <Button size="lg" variant="outline" className="px-8">
              See code
            </Button>
          </Link>
            </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpg"
              width={1280}
              height={720}
              alt="banner"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
        </div>
        </div>
  )
}

export default HeroSection