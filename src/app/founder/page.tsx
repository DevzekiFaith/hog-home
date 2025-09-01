"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import MobileModal from "../../components/MobileModal";
import Image from "next/image";
import { useState } from "react";

export default function FounderPage() {
  const [activeTab, setActiveTab] = useState("early-life");

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
        {/* Modern Founder Hero Section */}
        <section className="max-w-8xl mx-auto mb-24">
          <div className="">
            <div className=" text-center xl:text-left max-w-3xl">
              <div className="mb-8">
                <span className="inline-block px-6 py-3 rounded-full text-sm font-semibold mb-6" style={{ background: 'var(--accent-teal-light)', color: 'white' }}>
                  Senior Pastor & Founder • Established 1995
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient leading-tight">
                Rev. Daniel Osinachi
              </h1>
              <p className="text-2xl md:text-3xl mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                A visionary leader, passionate teacher, and devoted servant who has dedicated over 25 years 
                to transforming lives and building communities through faith, purpose, and unwavering commitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center xl:justify-start mb-8">
                <Link href="#journey" className="neumorphic-button-primary px-10 py-5 font-semibold text-white transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
                  His Journey
                </Link>
                <Link href="#philosophy" className="neumorphic-button px-10 py-5 font-semibold transition-all duration-300 hover:transform hover:-translate-y-2" style={{ color: 'var(--text-primary)' }}>
                  His Philosophy
                </Link>
                <Link href="#achievements" className="neumorphic-button px-10 py-5 font-semibold transition-all duration-300 hover:transform hover:-translate-y-2" style={{ color: 'var(--text-primary)' }}>
                  Achievements
                </Link>
              </div>
              
              {/* Personal Impact Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">25+</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Years Ministry</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">5,000+</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Lives Touched</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">12</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Churches Planted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">3</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Books Published</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <div className="neumorphic-card p-0 overflow-hidden animate-fade-in">
                  <Image 
                    src="/church1.jpg" 
                    alt="Rev. Daniel Osinachi" 
                    width={800} 
                    height={600}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Rev. Daniel Osinachi</h3>
                    <p className="text-lg opacity-90">"Raising leaders who will impact their world for Christ"</p>
                  </div>
                </div>
                
                {/* Floating Personal Highlights with Minimalist Icons */}
                <div className="absolute -bottom-8 -right-8 grid grid-cols-2 gap-4">
                  <div className="neumorphic-card p-4 text-center animate-fade-in animate-delay-1">
                    <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" style={{ color: 'var(--accent-teal)' }}>
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Author</div>
                  </div>
                  <div className="neumorphic-card p-4 text-center animate-fade-in animate-delay-2">
                    <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" style={{ color: 'var(--accent-teal)' }}>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Teacher</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Journey Timeline */}
        <section id="journey" className="max-w-8xl mx-auto mb-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gradient">His Journey</h2>
            <p className="text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              From humble beginnings to transformational leadership - discover the pivotal moments 
              that shaped Rev. Daniel's calling and ministry.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Timeline Navigation */}
            <div className="lg:w-1/3">
              <div className="neumorphic-card sticky top-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Life Chapters</h3>
                <div className="space-y-4">
                  {[
                    { id: "early-life", label: "Early Life & Calling", year: "1970-1995" },
                    { id: "founding", label: "Founding the Ministry", year: "1995-2000" },
                    { id: "growth", label: "Leadership & Growth", year: "2000-2010" },
                    { id: "expansion", label: "Global Vision", year: "2010-Present" }
                  ].map((phase) => (
                    <button
                      key={phase.id}
                      onClick={() => setActiveTab(phase.id)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        activeTab === phase.id 
                          ? 'bg-gradient-to-r from-teal-100 to-teal-50 border-l-4 border-teal-500' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{phase.label}</div>
                      <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{phase.year}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Content */}
            <div className="lg:w-2/3">
              <div className="neumorphic-card min-h-96">
                {activeTab === "early-life" && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full" style={{ background: 'var(--accent-teal)', color: 'white' }}>
                        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                          <path d="M12 3v18m0-18c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold text-gradient">Early Life & Divine Calling</h3>
                    </div>
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Born into a family of faith, Daniel's spiritual journey began early. His calling to ministry 
                        was evident from his youth, marked by a deep passion for God's word and an unwavering 
                        desire to serve others.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-lg" style={{ background: 'rgba(184, 212, 209, 0.1)' }}>
                          <h4 className="font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" style={{ color: 'var(--accent-teal)' }}>
                              <path d="M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2m15.48 0C19.9 10.64 20 11.31 20 12s-.1 1.36-.26 2m-15.48 0a8.01 8.01 0 0015.48 0m-15.48 0C4.82 15.46 7.26 17 10 17.23M19.74 14C18.18 15.46 15.74 17 13 17.23" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            Educational Foundation
                          </h4>
                          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                            Theological studies and spiritual formation that prepared him for ministry leadership
                          </p>
                        </div>
                        <div className="p-6 rounded-lg" style={{ background: 'rgba(184, 212, 209, 0.1)' }}>
                          <h4 className="font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" style={{ color: 'var(--accent-teal)' }}>
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            Divine Calling
                          </h4>
                          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                            A clear vision to establish a ministry that would raise leaders and transform communities
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* Additional timeline content sections would continue here */}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="neumorphic-card text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Connect with Rev. Daniel</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Experience transformational leadership and discover your God-given purpose through 
              Rev. Daniel's teachings and mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events" className="neumorphic-button-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:transform hover:-translate-y-1">
                Attend His Teachings
              </Link>
              <Link href="/contact" className="neumorphic-button px-8 py-4 font-semibold transition-all duration-300 hover:transform hover:-translate-y-1" style={{ color: 'var(--text-primary)' }}>
                Schedule Meeting
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
