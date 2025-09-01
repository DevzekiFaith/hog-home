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
      <div className="flex justify-between w-full max-w-6xl mx-auto p-6">
        <Link href="/about" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
          <span className="text-2xl">←</span> About
        </Link>
        <Link href="/ministry" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
          Ministry <span className="text-2xl">→</span>
        </Link>
      </div>

      {/* Hero Section with Parallax */}
      <div className="relative h-[70vh] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Parallax, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          parallax={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-full"
        >
          {events.filter(event => event.featured).map((event) => (
            <SwiperSlide key={event.id} className="relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
                data-swiper-parallax="-23%"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
                <div data-swiper-parallax="-300">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    {event.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" data-swiper-parallax="-200">
                    {event.description}
                  </p>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg">
                    <span className="bg-blue-600 px-6 py-3 rounded-full font-semibold">{event.date}</span>
                    <span className="bg-purple-600 px-6 py-3 rounded-full font-semibold">{event.time}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Upcoming Events
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow-lg'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Events Swiper with Coverflow Effect */}
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
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
          className="events-swiper pb-12"
        >
          {filteredEvents.map((event) => (
            <SwiperSlide key={event.id} className="w-80">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                      event.category === 'worship' ? 'bg-blue-500' :
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
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Join Us for Our Next Event</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the power of community worship and fellowship. All are welcome to join our events and be part of our growing family.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="/about" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn About Us
            </Link>
            <Link 
              href="/ministry" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Ministries
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .events-swiper .swiper-slide {
          width: 320px !important;
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
          width: 50px;
          height: 50px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </main>
  );
}
