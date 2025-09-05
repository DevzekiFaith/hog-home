"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import MobileModal from "../../components/MobileModal";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("mission");

  return (
    <div className="min-h-screen" style={{ background: 'var(--primary-bg)' }}>
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileModal />
      </div>
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      <main className="px-4 py-12">
        {/* Enhanced Hero Section */}
        <section className="max-w-8xl mx-auto mb-24">
          <div className="flex flex-col xl:flex-row items-center gap-16 mb-20">
            <div className="flex-1 text-center xl:text-left max-w-3xl">
              <div className="mb-8">
                <span className="inline-block px-6 py-3 rounded-full text-sm font-semibold mb-6" style={{ background: 'var(--accent-teal-light)', color: 'white' }}>
                  Established 1995 • Transforming Lives for 25+ Years
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient leading-tight">
                About House of Gideon
              </h1>
              <p className="text-2xl md:text-3xl mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                A vibrant faith community dedicated to empowering lives, transforming communities, 
                and raising leaders who will impact their world for Christ through purpose-driven ministry.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center xl:justify-start mb-8">
                <Link href="#mission" className="neumorphic-button-primary px-10 py-5 font-semibold text-white transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
                  Our Mission
                </Link>
                <Link href="#values" className="neumorphic-button px-10 py-5 font-semibold transition-all duration-300 hover:transform hover:-translate-y-2" style={{ color: 'var(--text-primary)' }}>
                  Core Values
                </Link>
                <Link href="#impact" className="neumorphic-button px-10 py-5 font-semibold transition-all duration-300 hover:transform hover:-translate-y-2" style={{ color: 'var(--text-primary)' }}>
                  Our Impact
                </Link>
              </div>
              
              {/* Ministry Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">25+</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Years Serving</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">5,000+</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Lives Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">15+</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">12</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Sister Churches</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <div className="neumorphic-card p-0 overflow-hidden animate-fade-in">
                  <Image 
                    src="/IMG-20250827-WA0009.jpg" 
                    alt="House of Gideon Community" 
                    width={800} 
                    height={600}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Our Community</h3>
                    <p className="text-lg opacity-90">United in faith, purpose, and love</p>
                  </div>
                </div>
                
                {/* Floating Highlights */}
                <div className="absolute -bottom-8 -right-8 grid grid-cols-2 gap-4">
                  <div className="neumorphic-card p-4 text-center animate-fade-in animate-delay-1">
                    <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" style={{ color: 'var(--accent-teal)' }}>
                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Community</div>
                  </div>
                  <div className="neumorphic-card p-4 text-center animate-fade-in animate-delay-2">
                    <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" style={{ color: 'var(--accent-teal)' }}>
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Love</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values Section */}
        <section id="mission" className="max-w-8xl mx-auto mb-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gradient">Our Foundation</h2>
            <p className="text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Built on unwavering faith, guided by divine purpose, and driven by transformational love - 
              these are the pillars that define House of Gideon.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Navigation */}
            <div className="lg:w-1/3">
              <div className="neumorphic-card sticky top-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Foundation</h3>
                <div className="space-y-4">
                  {[
                    { 
                      id: "mission", 
                      label: "Our Mission",
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )
                    },
                    { 
                      id: "vision", 
                      label: "Our Vision",
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )
                    },
                    { 
                      id: "values", 
                      label: "Core Values",
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      )
                    },
                    { 
                      id: "beliefs", 
                      label: "Our Beliefs",
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )
                    }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'bg-gradient-to-r from-teal-100 to-teal-50 border-l-4 border-teal-500' 
                          : 'hover:bg-gray-50 hover:text-black'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-current" style={{ width: '24px', height: '24px' }}>{item.icon}</span>
                        <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{item.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-2/3">
              <div className="neumorphic-card min-h-96">
                {activeSection === "mission" && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full" style={{ background: 'var(--accent-teal)', color: 'white' }}>
                        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold text-gradient">Our Mission</h3>
                    </div>
                    <div className="space-y-6">
                      <blockquote className="text-2xl italic font-medium mb-6" style={{ color: 'var(--text-primary)' }}>
                        "To empower lives, transform communities, and raise leaders who will impact their world for Christ 
                        through faith-centered worship, purposeful discipleship, and compassionate service."
                      </blockquote>
                      <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        At House of Gideon, our mission extends beyond traditional church boundaries. We are committed to 
                        creating an environment where every individual discovers their God-given purpose, develops their 
                        unique gifts, and becomes equipped to make a lasting impact in their communities and beyond.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-lg text-center" style={{ background: 'var(--accent-teal-light)', color: 'white' }}>
                          <h4 className="font-bold mb-2">Empower</h4>
                          <p className="text-sm">Equipping individuals with spiritual tools and practical skills</p>
                        </div>
                        <div className="p-6 rounded-lg text-center" style={{ background: 'var(--accent-teal)', color: 'white' }}>
                          <h4 className="font-bold mb-2">Transform</h4>
                          <p className="text-sm">Creating positive change in communities through love and service</p>
                        </div>
                        <div className="p-6 rounded-lg text-center" style={{ background: 'var(--accent-teal-dark)', color: 'white' }}>
                          <h4 className="font-bold mb-2">Raise Leaders</h4>
                          <p className="text-sm">Developing the next generation of Christ-centered leaders</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "vision" && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full" style={{ background: 'var(--accent-teal-light)', color: 'white' }}>
                        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold text-gradient">Our Vision</h3>
                    </div>
                    <div className="space-y-6">
                      <blockquote className="text-2xl italic font-medium mb-6" style={{ color: 'var(--text-primary)' }}>
                        "To be a beacon of hope and transformation, establishing thriving faith communities across nations 
                        where every person discovers their divine purpose and lives it out with passion and excellence."
                      </blockquote>
                      <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Our vision encompasses a future where House of Gideon serves as a catalyst for spiritual awakening 
                        and social transformation. We envision communities where faith is not just practiced but lived out 
                        in practical ways that bring healing, hope, and positive change to society.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 rounded-lg" style={{ background: 'rgba(184, 212, 209, 0.1)' }}>
                          <div className="w-8 h-8 flex items-center justify-center rounded-full mt-1" style={{ background: 'var(--accent-teal)', color: 'white' }}>
                            <span className="text-sm font-bold">1</span>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Global Expansion</h4>
                            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Establishing 50 sister churches across 10 countries by 2030</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg" style={{ background: 'rgba(184, 212, 209, 0.1)' }}>
                          <div className="w-8 h-8 flex items-center justify-center rounded-full mt-1" style={{ background: 'var(--accent-teal-light)', color: 'white' }}>
                            <span className="text-sm font-bold">2</span>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Leadership Development</h4>
                            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Training 1,000+ leaders through our comprehensive development programs</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg" style={{ background: 'rgba(184, 212, 209, 0.1)' }}>
                          <div className="w-8 h-8 flex items-center justify-center rounded-full mt-1" style={{ background: 'var(--accent-teal-dark)', color: 'white' }}>
                            <span className="text-sm font-bold">3</span>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Community Impact</h4>
                            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Transforming 100+ communities through sustainable development projects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "values" && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full" style={{ background: 'var(--accent-teal-dark)', color: 'white' }}>
                        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                          <path d="M12 2l2.09 6.26L20 10l-4.91 4.87L16.18 21 12 18.27 7.82 21l1.09-6.13L4 10l5.91-1.74L12 2z" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold text-gradient">Core Values</h3>
                    </div>
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Our core values serve as the foundation for everything we do, guiding our decisions, 
                        shaping our character, and defining our approach to ministry and community engagement.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          { title: "Faith", desc: "Unwavering trust in God's promises and His plan for our lives", color: "var(--accent-teal)" },
                          { title: "Love", desc: "Unconditional love that reflects Christ's heart for all people", color: "var(--accent-teal-light)" },
                          { title: "Unity", desc: "Embracing diversity while maintaining spiritual unity in Christ", color: "var(--accent-teal-dark)" },
                          { title: "Excellence", desc: "Pursuing the highest standards in all aspects of ministry and service", color: "var(--accent-teal)" },
                          { title: "Integrity", desc: "Living with honesty, transparency, and moral uprightness", color: "var(--accent-teal-light)" },
                          { title: "Service", desc: "Selflessly serving others with humility and compassion", color: "var(--accent-teal-dark)" }
                        ].map((value, index) => (
                          <div key={value.title} className="p-6 rounded-lg" style={{ background: 'rgba(184, 212, 209, 0.1)' }}>
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-8 h-8 rounded-full" style={{ background: value.color }}></div>
                              <h4 className="font-bold text-xl" style={{ color: 'var(--text-primary)' }}>{value.title}</h4>
                            </div>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{value.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "beliefs" && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full" style={{ background: 'var(--accent-teal)', color: 'white' }}>
                        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold text-gradient">Our Beliefs</h3>
                    </div>
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Our beliefs are rooted in biblical truth and form the theological foundation upon which 
                        our ministry is built. These convictions guide our teaching, worship, and community life.
                      </p>
                      <div className="space-y-4">
                        {[
                          "We believe in the Trinity - God the Father, Son, and Holy Spirit",
                          "We believe in the divine inspiration and authority of Scripture",
                          "We believe in salvation by grace through faith in Jesus Christ",
                          "We believe in the power of prayer and the gifts of the Holy Spirit",
                          "We believe in the Great Commission and the call to make disciples",
                          "We believe in the second coming of Jesus Christ and eternal life"
                        ].map((belief, index) => (
                          <div key={index} className="flex items-start gap-4 p-4 rounded-lg" style={{ background: 'rgba(184, 212, 209, 0.1)' }}>
                            <div className="w-6 h-6 flex items-center justify-center rounded-full mt-1" style={{ background: 'var(--accent-teal)', color: 'white' }}>
                              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>{belief}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="neumorphic-card text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Join Our Community</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Experience the transformational power of faith, community, and purpose. 
              Discover your calling and make a lasting impact with House of Gideon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events" className="neumorphic-button-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:transform hover:-translate-y-1">
                Join Our Services
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
