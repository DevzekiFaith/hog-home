
"use client";
import React, { useState, useEffect } from 'react';

interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Sermons', href: '/sermons' },
  { name: 'Events', href: '/events' },
  { name: 'Ministries', href: '/ministries' },
  { name: 'Give', href: '/give' },
  { name: 'Contact', href: '/contact' },
];

export default function MobileModal() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!isMobile) {
    return null;
  }

  return (
    <div className="md:hidden">
      <button
        className={`fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 ${open ? 'bg-white/20' : isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'
          } shadow-lg`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setOpen(false)}
        >
          <div
            className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-white/90 to-white/80 backdrop-blur-xl shadow-2xl overflow-y-auto transition-transform duration-300 transform translate-x-0"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                  Menu
                </h2>
              </div>
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white/50 hover:shadow-md"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-gray-800 group-hover:text-blue-600 font-medium text-lg">
                      {item.name}
                    </span>
                    <span className="ml-auto text-gray-400 group-hover:text-blue-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
