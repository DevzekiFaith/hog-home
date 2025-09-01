
"use client";

import Navbar from "../components/Navbar";
import MobileModal from "../components/MobileModal";
import HeroPage from "@/components/Hero/HeroPage";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [welcomeSlide, setWelcomeSlide] = useState(0);

  // Hero section images
  const heroImages = [
    "/IMG-20250827-WA0008.jpg",
    "/IMG-20250827-WA0009.jpg", 
    "/IMG-20250827-WA0010.jpg",
    "/IMG-20250827-WA0011.jpg"
  ];

  // Welcome section images
  const welcomeImages = [
    "/IMG-20250827-WA0015.jpg",
    "/IMG-20250827-WA0016.jpg",
    "/church1.jpg",
    "/IMG-20250827-WA0014.jpg"
  ];

  // Auto-slide for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Auto-slide for welcome section
  useEffect(() => {
    const interval = setInterval(() => {
      setWelcomeSlide((prev) => (prev + 1) % welcomeImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [welcomeImages.length]);

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Mobile Modal for navigation */}
      <div className="md:hidden">
        <MobileModal>
          <Navbar />
        </MobileModal>
      </div>
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>
      
      {/* Enhanced Hero Section with Image Slider */}
      <section className="relative h-screen overflow-hidden">
        {/* Image Slider Background */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`House of Gideon ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm">
                Welcome to House of Gideon
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Empowering Lives,
              <br />
              <span className="text-gradient bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
                Transforming Communities
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Join us in a journey of faith, purpose, and community transformation. 
              Discover your calling and make a lasting impact for Christ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:transform hover:-translate-y-1">
                Learn More About Us
              </Link>
              <Link href="/events" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:transform hover:-translate-y-1">
                Join Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      <main className="flex-1 flex flex-col items-center justify-center p-8 no-radius">
        <div className="flex justify-between w-full max-w-4xl mb-4">
          <Link href="/contact" className="flex items-center gap-2 text-blue-600 hover:underline">
            <span className="text-2xl">&#8592;</span> Contact
          </Link>
          <Link href="/about" className="flex items-center gap-2 text-blue-600 hover:underline">
            About <span className="text-2xl">&#8594;</span>
          </Link>
        </div>

        {/* Enhanced Welcome Section with Image Slider */}
        <section className="w-full max-w-6xl mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-gradient">Welcome to House of Gideon</h1>
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A vibrant faith community where lives are transformed, leaders are raised, and communities flourish through the power of Christ.
          </p>
          
          {/* Image Slider Container */}
          <div className="relative w-full max-w-4xl mx-auto mb-8">
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              {welcomeImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === welcomeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`House of Gideon Community ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              ))}
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Our Community</h3>
                <p className="text-lg opacity-90">United in faith, purpose, and transformational love</p>
              </div>
            </div>

            {/* Welcome Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {welcomeImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setWelcomeSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === welcomeSlide 
                      ? 'bg-teal-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <Link href="/about" className="morphism-card animate-fade-in hover:scale-105 transition-transform duration-200 group">
            <div className="flex items-center gap-3 mb-2">
              <img src="/IMG-20250827-WA0009.jpg" alt="About Icon" className="w-10 h-10 rounded-full shadow" />
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600">About Us</h2>
            </div>
            <p className="text-gray-600 mb-2">Learn more about our church, mission, and values.</p>
            <span className="text-blue-500 font-medium group-hover:underline">Read More →</span>
          </Link>
          <Link href="/events" className="morphism-card animate-fade-in animate-delay-1 hover:scale-105 transition-transform duration-200 group">
            <div className="flex items-center gap-3 mb-2">
              <img src="/IMG-20250827-WA0011.jpg" alt="Events Icon" className="w-10 h-10 rounded-full shadow" />
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600">Events</h2>
            </div>
            <p className="text-gray-600 mb-2">Stay updated with our upcoming events and programs.</p>
            <span className="text-blue-500 font-medium group-hover:underline">See Events →</span>
          </Link>
          <Link href="/ministry" className="morphism-card animate-fade-in animate-delay-2 hover:scale-105 transition-transform duration-200 group">
            <div className="flex items-center gap-3 mb-2">
              <img src="/IMG-20250827-WA0015.jpg" alt="Ministry Icon" className="w-10 h-10 rounded-full shadow" />
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600">Ministry</h2>
            </div>
            <p className="text-gray-600 mb-2">Discover our ministry, vision, and impact.</p>
            <span className="text-blue-500 font-medium group-hover:underline">Explore Ministry →</span>
          </Link>
          <Link href="/contact" className="morphism-card animate-fade-in animate-delay-3 hover:scale-105 transition-transform duration-200 group">
            <div className="flex items-center gap-3 mb-2">
              <img src="/IMG-20250827-WA0014.jpg" alt="Contact Icon" className="w-10 h-10 rounded-full shadow" />
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600">Contact</h2>
            </div>
            <p className="text-gray-600 mb-2">Get in touch with House of Gideon.</p>
            <span className="text-blue-500 font-medium group-hover:underline">Contact Us →</span>
          </Link>
        </div>
      </main>
      <footer className="bg-gray-100 py-4 text-center">
        <div className="flex justify-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <p className="mt-2">&copy; {new Date().getFullYear()} House of Gideon. All rights reserved.</p>
      </footer>
    </div>
  );
}
