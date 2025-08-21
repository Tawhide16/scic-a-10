"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://i.ibb.co.com/bR5gGd99/clem-onojeghuo-c4pbb7y-NM2c-unsplash.jpg",
    title: "Hello there",
    desc: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.",
    cta: "Get Started",
  },
  {
    id: 2,
    image:
      "https://i.ibb.co.com/xSRWHDd7/nathalia-rosa-r-WMIbqm-Oxr-Y-unsplash.jpg",
    title: "Discover More",
    desc: "Explore endless opportunities and bring your ideas to life with creativity and innovation.",
    cta: "Explore Now",
  },
  {
    id: 3,
    image:
      "https://i.ibb.co.com/V0V6JDQK/clark-street-mercantile-qn-Kh-ZJPKFD8-unsplash.jpg",
    title: "Join Us Today",
    desc: "Be part of a vibrant community and shape the future with passion and teamwork.",
    cta: "Join Now",
  },
  {
    id: 4,
    image:
      "https://i.ibb.co.com/Wpg4Ftkb/clark-street-mercantile-P3p-I6xzovu0-unsplash.jpg",
    title: "Join Us Today",
    desc: "Be part of a vibrant community and shape the future with passion and teamwork.",
    cta: "Join Now",
  },
  {
    id: 5,
    image:
      "https://i.ibb.co.com/N6YP89PB/freestocks-3-Q3ts-J01nc-unsplash.jpg",
    title: "Join Us Today",
    desc: "Be part of a vibrant community and shape the future with passion and teamwork.",
    cta: "Join Now",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-slide every 5s
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const goToSlide = (index) => {
    setCurrent(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-120 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current
              ? "opacity-100 transform translate-x-0"
              : "opacity-0 transform translate-x-full"
          }`}
        >
          <div
            className="hero min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay bg-black/50"></div>
            <div className="hero-content text-center text-white">
              <div
                className={`max-w-2xl transform transition-all duration-1000 ${
                  index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
                  {slide.title}
                </h1>
                <p className="mb-8 text-lg md:text-xl opacity-90">
                  {slide.desc}
                </p>
                <button className="btn btn-primary btn-lg rounded-full px-8 py-3 text-white font-semibold transform hover:scale-105 transition-all duration-300">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/30 p-3 rounded-full text-white hover:bg-black/60 transition-all duration-300 backdrop-blur-sm z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/30 p-3 rounded-full text-white hover:bg-black/60 transition-all duration-300 backdrop-blur-sm z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-5 right-5 bg-black/30 p-2 rounded-full text-white hover:bg-black/60 transition-all duration-300 backdrop-blur-sm z-10"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 z-10">
        <div
          className="h-full bg-primary transition-all duration-5000 ease-linear"
          style={{ width: isPlaying ? "100%" : "0%" }}
          key={current}
        ></div>
      </div>
    </div>
  );
};

export default Hero;