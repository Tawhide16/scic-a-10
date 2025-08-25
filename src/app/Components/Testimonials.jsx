"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Product Manager",
    feedback: "Next.js 15 made our project insanely fast. Love the new App Router!",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5
  },
  {
    name: "Mark Smith",
    role: "Frontend Developer",
    feedback: "The Turbopack build is a game-changer. Dev experience is smooth.",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 4
  },
  {
    name: "Sarah Lee",
    role: "UI/UX Designer",
    feedback: "I love how easy it is to style with Tailwind + Next.js 15.",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5
  },
  {
    name: "David Wilson",
    role: "Fullstack Developer",
    feedback: "Server components have completely transformed how we build applications.",
    avatar: "https://i.pravatar.cc/150?img=4",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Tech Lead",
    feedback: "The performance improvements in Next.js 15 are remarkable.",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 4
  },
];

export default function Testimonials() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
    
    // Observe theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover why developers and companies love working with us and our technology stack.
        </p>
      </div>
      
      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
          renderBullet: function (index, className) {
            return `<span class="${className}" style="background-color: ${isDark ? '#818cf8' : '#4f46e5'};"></span>`;
          }
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        className="pb-16"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 h-full border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-700 rounded-full p-1 shadow-md">
                    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
                
                <StarRating rating={t.rating} />
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg italic leading-relaxed">"{t.feedback}"</p>
                
                <div className="mt-auto">
                  <h3 className="font-bold text-xl mb-1">{t.name}</h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{t.role}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}