"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import MobileModal from "../../components/MobileModal";
import Image from "next/image";
import { useState } from "react";

export default function MinistryPage() {
  const [activeMinistry, setActiveMinistry] = useState("worship");

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
        {/* Enhanced Hero Section with Advanced Flex Layout */}
        <section className="max-w-8xl mx-auto mb-24">
          <div className="flex  xl:flex-row items-center gap-16 mb-20">
            <div className="flex-1 text-center xl:text-left max-w-3xl">
              <div className="mb-8">
                <span className="inline-block px-6 py-3 rounded-full text-sm font-semibold mb-6" style={{ background: 'var(--accent-teal-light)', color: 'white' }}>
                  Transforming Lives • Building Leaders • Serving Communities
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient leading-tight">
                Our Ministry
              </h1>
              <p className="text-2xl md:text-3xl mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Discover how House of Gideon empowers individuals to discover their God-given purpose through 
                comprehensive ministry programs, leadership development, and community transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center xl:justify-start mb-8">
                <Link href="#programs" className="neumorphic-button-primary px-10 py-5 font-semibold text-white transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
                  Explore Programs
                </Link>
                <Link href="#impact" className="neumorphic-button px-10 py-5 font-semibold transition-all duration-300 hover:transform hover:-translate-y-2" style={{ color: 'var(--text-primary)' }}>
                  Our Impact
                </Link>
                <Link href="/events" className="neumorphic-button px-10 py-5 font-semibold transition-all duration-300 hover:transform hover:-translate-y-2" style={{ color: 'var(--text-primary)' }}>
                  Join Events
                </Link>
              </div>
              
              {/* Quick Ministry Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">15+</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Active Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">500+</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Leaders Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">2,000+</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">8</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Ministry Areas</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <div className="neumorphic-card p-0 overflow-hidden animate-fade-in">
                  <Image 
                    src="/IMG-20250827-WA0015.jpg" 
                    alt="House of Gideon Ministry" 
                    width={800} 
                    height={600}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Raising Leaders</h3>
                    <p className="text-lg opacity-90">Who will impact their world for Christ</p>
                  </div>
                </div>
                
                {/* Floating Ministry Highlights */}
                <div className="absolute -bottom-8 -right-8 grid grid-cols-2 gap-4">
                  <div className="neumorphic-card p-4 text-center animate-fade-in animate-delay-1">
                    <div className="text-2xl mb-2">📚</div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Teaching</div>
                  </div>
                  <div className="neumorphic-card p-4 text-center animate-fade-in animate-delay-2">
                    <div className="text-2xl mb-2">🌍</div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Outreach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Ministry Areas with Interactive Tabs */}
        <section id="programs" className="max-w-8xl mx-auto mb-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gradient">Ministry Areas</h2>
            <p className="text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Eight comprehensive ministry areas designed to nurture spiritual growth, develop leadership, 
              and create lasting community impact.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Ministry Navigation */}
            <div className="lg:w-1/3">
              <div className="neumorphic-card sticky top-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Ministry Focus</h3>
                <div className="space-y-4">
                  {[
                    { id: "worship", label: "Worship & Music", icon: "🎵" },
                    { id: "youth", label: "Youth Ministry", icon: "🌟" },
                    { id: "women", label: "Women's Ministry", icon: "👩‍🤝‍👩" },
                    { id: "outreach", label: "Community Outreach", icon: "🤝" },
                    { id: "discipleship", label: "Discipleship", icon: "📖" },
                    { id: "missions", label: "Global Missions", icon: "🌍" }
                  ].map((ministry) => (
                    <button
                      key={ministry.id}
                      onClick={() => setActiveMinistry(ministry.id)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        activeMinistry === ministry.id 
                          ? 'bg-gradient-to-r from-teal-100 to-teal-50 border-l-4 border-teal-500' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{ministry.icon}</span>
                        <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{ministry.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Ministry Content */}
            <div className="lg:w-2/3">
              <div className="neumorphic-card min-h-96">
                {activeMinistry === "worship" && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full" style={{ background: 'var(--accent-teal)', color: 'white' }}>
                        <span className="text-3xl">🎵</span>
                      </div>
                      <h3 className="text-3xl font-bold text-gradient">Worship & Music Ministry</h3>
                    </div>
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Our worship ministry creates an atmosphere where hearts connect with God through powerful music, 
                        authentic worship, and Spirit-led experiences that transform lives.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-lg" style={{ background: 'rgba(184, 212, 209, 0.1)' }}>
                          <h4 className="font-bold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>Programs</h4>
                          <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                            <li className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-teal)' }}></span>
                              Sunday Worship Services
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-teal)' }}></span>
                              Choir & Music Training
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-teal)' }}></span>
                              Worship Nights
                            </li>
                          </ul>
                        </div>
                        <div className="p-6 rounded-lg" style={{ background: 'rgba(184, 212, 209, 0.1)' }}>
                          <h4 className="font-bold mb-3 text-xl" style={{ color: 'var(--text-primary)' }}>Impact</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span style={{ color: 'var(--text-secondary)' }}>Active Musicians</span>
                              <span className="font-bold text-gradient">25+</span>
                            </div>
                            <div className="flex justify-between">
                              <span style={{ color: 'var(--text-secondary)' }}>Weekly Attendees</span>
                              <span className="font-bold text-gradient">800+</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* Additional ministry content sections would continue here */}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action Section */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="neumorphic-card text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Discover Your Purpose</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Join thousands who have discovered their God-given purpose through our comprehensive ministry programs. 
              Your transformation journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events" className="neumorphic-button-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:transform hover:-translate-y-1">
                Join Our Programs
              </Link>
              <Link href="/contact" className="neumorphic-button px-8 py-4 font-semibold transition-all duration-300 hover:transform hover:-translate-y-1" style={{ color: 'var(--text-primary)' }}>
                Connect With Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
