'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/effect-coverflow';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  category: 'worship' | 'youth' | 'outreach' | 'special';
  location: string;
  featured?: boolean;
}

const events: Event[] = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "10:00 AM",
    description: "Join us for a powerful worship experience with inspiring messages, uplifting music, and fellowship with believers.",
    image: "/IMG-20250827-WA0012.jpg",
    category: "worship",
    location: "Main Sanctuary",
    featured: true
  },
  {
    id: 2,
    title: "Youth Fellowship Night",
    date: "Every Friday",
    time: "6:00 PM",
    description: "A vibrant gathering for young people to connect, grow in faith, and serve together in community.",
    image: "/IMG-20250827-WA0013.jpg",
    category: "youth",
    location: "Youth Center"
  },
  {
    id: 3,
    title: "Community Outreach Program",
    date: "First Saturday",
    time: "9:00 AM",
    description: "Serving our community through food distribution, clothing drives, and neighborhood assistance programs.",
    image: "/IMG-20250827-WA0014.jpg",
    category: "outreach",
    location: "Community Center"
  },
  {
    id: 4,
    title: "Women's Prayer Meeting",
    date: "Every Wednesday",
    time: "7:00 PM",
    description: "A time for women to come together in prayer, worship, and mutual encouragement in faith.",
    image: "/IMG-20250827-WA0015.jpg",
    category: "worship",
    location: "Prayer Room"
  },
  {
    id: 5,
    title: "Annual Revival Conference",
    date: "December 15-17",
    time: "6:00 PM",
    description: "Three days of powerful ministry, worship, and spiritual renewal with guest speakers and special programs.",
    image: "/IMG-20250827-WA0016.jpg",
    category: "special",
    location: "Main Sanctuary",
    featured: true
  },
  {
    id: 6,
    title: "Children's Bible Study",
    date: "Every Saturday",
    time: "2:00 PM",
    description: "Interactive Bible lessons, games, and activities designed to help children grow in their relationship with God.",
    image: "/IMG-20250827-WA0017.jpg",
    category: "youth",
    location: "Children's Hall"
  }
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === activeCategory));
    }
  }, [activeCategory]);

  const categories = [
    { id: 'all', name: 'All Events', icon: '🗓️' },
    { id: 'worship', name: 'Worship', icon: '🙏' },
    { id: 'youth', name: 'Youth', icon: '👥' },
    { id: 'outreach', name: 'Outreach', icon: '🤝' },
    { id: 'special', name: 'Special', icon: '⭐' }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <div className="flex justify-between w-full max-w-6xl mx-auto p-4 sm:p-6">
        <Link href="/about" className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-blue-600 hover:text-blue-800 transition-colors group">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-blue-800 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>About</span>
        </Link>
        <Link href="/ministry" className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-blue-600 hover:text-blue-800 transition-colors">
          Ministry <span className="text-xl sm:text-2xl">→</span>
        </Link>
      </div>

      {/* Hero Section with Parallax - Mobile Responsive */}
      <div className="relative h-[40vh] md:h-[60vh] w-[calc(100%-2rem)] max-w-5xl mx-auto rounded-2xl my-4 overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Parallax, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          parallax={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-full w-full"
          breakpoints={{
            0: { navigation: false, pagination: { clickable: true } },
            768: { navigation: true }
          }}
        >
          {/* Static Extra Slide */}
          <SwiperSlide className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/IMG-20250827-WA0018.jpg)" }}
              data-swiper-parallax="-23%"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
              <div data-swiper-parallax="-300">
                <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Special Gathering
                </h1>
                <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto" data-swiper-parallax="-200">
                  Celebrate faith, worship, and fellowship with our extended family.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Featured Event Slides */}
          {events.filter(event => event.featured).map((event) => (
            <SwiperSlide key={event.id} className="relative w-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
                data-swiper-parallax="-23%"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
                <div data-swiper-parallax="-300">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent px-4">
                    {event.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 max-w-2xl mx-auto px-4" data-swiper-parallax="-200">
                    {event.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base">
                    <span className="bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold">{event.date}</span>
                    <span className="bg-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold">{event.time}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Category Filter */}
      <div className="w-[calc(100%-2rem)] max-w-5xl mx-auto py-8 sm:py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Upcoming Events
        </h2>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow-lg'
                }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Events Swiper with Coverflow Effect - Responsive */}
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 'auto' },
          }}
          className="events-swiper pb-8 sm:pb-12 w-full"
        >
          {filteredEvents.map((event) => (
            <SwiperSlide key={event.id} className="w-64 sm:w-72 md:w-80">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${event.category === 'worship' ? 'bg-blue-500' :
                        event.category === 'youth' ? 'bg-green-500' :
                          event.category === 'outreach' ? 'bg-orange-500' :
                            'bg-purple-500'
                      }`}>
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">📅</span>
                      <span className="font-semibold">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-600">⏰</span>
                      <span className="font-semibold">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-purple-600">📍</span>
                      <span className="font-semibold">{event.location}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Join Us for Our Next Event</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            Experience the power of community worship and fellowship. All are welcome to join our events and be part of our growing family.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/about"
              className="bg-white text-blue-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Learn About Us
            </Link>
            <Link
              href="/ministry"
              className="border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-sm sm:text-base"
            >
              Explore Ministries
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .events-swiper .swiper-slide {
          width: 100% !important;
          max-width: 20rem; /* 320px */
          margin: 0 auto;
        }
        
        @media (min-width: 640px) {
          .events-swiper .swiper-slide {
            max-width: 22rem; /* 352px */
          }
        }
        
        @media (min-width: 1024px) {
          .events-swiper .swiper-slide {
            max-width: 24rem; /* 384px */
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .swiper-pagination-bullet {
          background: #3b82f6;
          opacity: 0.5;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #3b82f6;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          color: #3b82f6;
          background: white;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
      
      {/* Social Media Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <h3 className="text-lg font-semibold text-gray-700">Connect With Us</h3>
            <div className="flex space-x-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.17.63 2.33 1.52 3.1 1.16 1.03 2.87 1.22 3.99.25 1.28-1.19 1.23-3.28.91-4.8-.02-.11-.2-.12-4.85-.06-2.25.03-4.72.03-6.96.03v6.5c0 .52-.44.98-.97 1.02-1.1.08-2.2-.36-2.8-1.15-.6-.8-.77-1.9-.45-2.85.32-.95 1.18-1.65 2.22-1.7.1 0 .2 0 .3.02V8.5c-1.02-.07-2.06.25-2.87.85-.85.63-1.38 1.6-1.47 2.63-.12 1.34.5 2.66 1.6 3.48.9.68 2.08.93 3.18.68.12-.03.24-.08.35-.13.01 0 .01 0 .02.01.01 0 .01 0 .02-.01.11.04.23.09.35.13 1.1.25 2.28 0 3.18-.68.9-.68 1.4-1.7 1.5-2.77.02-.11.02-.23.02-.34v-6.2c.16.02.31.05.47.07 1.1.12 2.2-.12 3.07-.7.1-.08.19-.17.28-.26.01 0 .01 0 .01.01.01 0 .01 0 .01-.01v5.16c0 4.68-3.8 8.48-8.48 8.48-4.68 0-8.48-3.8-8.48-8.48 0-4.68 3.8-8.48 8.48-8.48z" />
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Yonan Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
