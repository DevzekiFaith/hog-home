"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import MobileModal from "../../components/MobileModal";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function CataloguePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Ministry catalogue images with descriptions
  const catalogueItems = [
    {
      image: "/IMG-20250827-WA0008.jpg",
      title: "Sunday Worship Service",
      description: "Our vibrant Sunday worship brings together hundreds of believers for powerful praise, worship, and life-changing messages.",
      category: "Worship"
    },
    {
      image: "/IMG-20250827-WA0009.jpg",
      title: "Community Fellowship",
      description: "Building strong relationships and fostering unity through regular fellowship gatherings and community events.",
      category: "Fellowship"
    },
    {
      image: "/IMG-20250827-WA0010.jpg",
      title: "Youth Ministry Program",
      description: "Empowering the next generation through dynamic youth programs, leadership training, and mentorship opportunities.",
      category: "Youth"
    },
    {
      image: "/IMG-20250827-WA0011.jpg",
      title: "Leadership Conference",
      description: "Annual leadership development conference equipping leaders with practical skills and spiritual foundation.",
      category: "Leadership"
    },
    {
      image: "/IMG-20250827-WA0012.jpg",
      title: "Outreach Ministry",
      description: "Reaching out to communities with love, practical assistance, and the transformational message of hope.",
      category: "Outreach"
    },
    {
      image: "/IMG-20250827-WA0013.jpg",
      title: "Women's Empowerment",
      description: "Supporting and empowering women through specialized programs, workshops, and mentorship initiatives.",
      category: "Women's Ministry"
    },
    {
      image: "/IMG-20250827-WA0014.jpg",
      title: "Prayer & Intercession",
      description: "Dedicated prayer sessions and intercession meetings that form the spiritual backbone of our ministry.",
      category: "Prayer"
    },
    {
      image: "/IMG-20250827-WA0015.jpg",
      title: "Discipleship Training",
      description: "Comprehensive discipleship programs designed to develop mature, effective Christian leaders.",
      category: "Discipleship"
    },
    {
      image: "/IMG-20250827-WA0016.jpg",
      title: "Children's Ministry",
      description: "Nurturing young hearts and minds through age-appropriate programs and engaging activities.",
      category: "Children"
    },
    {
      image: "/IMG-20250827-WA0017.jpg",
      title: "Music & Worship Team",
      description: "Our talented worship team creates an atmosphere of praise that ushers in God's presence.",
      category: "Music"
    },
    {
      image: "/IMG-20250827-WA0018.jpg",
      title: "Special Events",
      description: "Memorable special events and celebrations that bring our community together in joy and fellowship.",
      category: "Events"
    },
    {
      image: "/IMG-20250827-WA0019.jpg",
      title: "Global Missions",
      description: "Extending our reach across nations through strategic missions and church planting initiatives.",
      category: "Missions"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % catalogueItems.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, catalogueItems.length]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % catalogueItems.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + catalogueItems.length) % catalogueItems.length);
    }

    // Resume auto-play after 3 seconds
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStart(e.clientX);
    setIsAutoPlaying(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (touchStart) {
      setTouchEnd(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % catalogueItems.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + catalogueItems.length) % catalogueItems.length);
    }

    setTouchStart(0);
    setTouchEnd(0);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % catalogueItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + catalogueItems.length) % catalogueItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--primary-bg)' }}>
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

      <main className="px-4 py-12">
        {/* Enhanced Hero Section */}
        <section className="max-w-8xl mx-auto mb-24">
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 rounded-full text-sm font-semibold mb-6" style={{ background: 'var(--accent-teal-light)', color: 'white' }}>
                Ministry Gallery • Swipe to Explore
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient leading-tight">
              Ministry Catalogue
            </h1>
            <p className="text-2xl md:text-3xl mb-10 leading-relaxed max-w-4xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Explore the vibrant life of House of Gideon through our comprehensive ministry programs, 
              community events, and transformational moments captured in time.
            </p>
          </div>

          {/* Main Image Slider */}
          <div className="relative max-w-6xl mx-auto">
            <div 
              ref={sliderRef}
              className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {catalogueItems.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-4xl">
                      <div className="mb-4">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-bold mb-4">{item.title}</h2>
                      <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {catalogueItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
              >
                {isAutoPlaying ? (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9 4h10" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-8">
            <span className="text-lg font-semibold" style={{ color: 'var(--text-secondary)' }}>
              {currentSlide + 1} / {catalogueItems.length}
            </span>
          </div>
        </section>

        {/* Thumbnail Gallery */}
        <section className="max-w-8xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Quick Browse</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Click any thumbnail to jump to that ministry highlight
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {catalogueItems.map((item, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentSlide 
                    ? 'ring-4 ring-teal-500 scale-105' 
                    : 'hover:scale-105 hover:ring-2 hover:ring-teal-300'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-xs font-semibold text-white bg-black/50 px-2 py-1 rounded truncate block">
                    {item.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Ministry Categories */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="neumorphic-card text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Explore Our Ministries</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Discover the diverse ways House of Gideon serves our community and transforms lives 
              through purposeful ministry programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ministry" className="neumorphic-button-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:transform hover:-translate-y-1">
                Learn About Our Ministry
              </Link>
              <Link href="/events" className="neumorphic-button px-8 py-4 font-semibold transition-all duration-300 hover:transform hover:-translate-y-1" style={{ color: 'var(--text-primary)' }}>
                Join Our Events
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
