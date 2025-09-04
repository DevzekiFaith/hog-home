"use client";

// src/app/ministry/page.tsx

import Link from "next/link";
import Navbar from "../../components/Navbar";
import MobileModal from "../../components/MobileModal";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// -- Data --------------------------------------------------------------
const MINISTRIES = [
  {
    id: "worship",
    label: "Worship & Music",
    icon: "🎵",
    description:
      "Our worship ministry creates an atmosphere where hearts connect with God through powerful music, authentic worship, and Spirit-led experiences.",
    programs: ["Sunday Worship Services", "Choir & Music Training", "Worship Nights"],
    impact: [
      { label: "Active Musicians", value: "25+" },
      { label: "Weekly Attendees", value: "800+" },
    ],
  },
  {
    id: "youth",
    label: "Youth Ministry",
    icon: "🌟",
    description:
      "Empowering the next generation through discipleship, mentorship, and dynamic youth programs that inspire leadership and spiritual growth.",
    programs: ["Youth Camps", "Bible Studies", "Mentorship Groups"],
    impact: [
      { label: "Youth Members", value: "300+" },
      { label: "Annual Retreats", value: "5" },
    ],
  },
  {
    id: "women",
    label: "Women's Ministry",
    icon: "👩‍🤝‍👩",
    description:
      "Equipping women to grow in faith, build strong families, and serve their communities with compassion and leadership.",
    programs: ["Prayer Groups", "Leadership Conferences", "Community Service"],
    impact: [
      { label: "Active Groups", value: "12" },
      { label: "Leaders Raised", value: "50+" },
    ],
  },
  {
    id: "outreach",
    label: "Community Outreach",
    icon: "🤝",
    description:
      "Transforming communities through acts of service, charity projects, and partnerships that bring hope and lasting change.",
    programs: ["Food Drives", "Health Clinics", "Skill Development"],
    impact: [
      { label: "Families Helped", value: "1,200+" },
      { label: "Annual Projects", value: "25+" },
    ],
  },
  {
    id: "discipleship",
    label: "Discipleship",
    icon: "📖",
    description:
      "Deepening faith through structured discipleship programs, mentorship, and one-on-one spiritual guidance.",
    programs: ["Bible Training", "Mentorship Programs", "Prayer Retreats"],
    impact: [
      { label: "Active Groups", value: "20" },
      { label: "Mentors", value: "60+" },
    ],
  },
  {
    id: "missions",
    label: "Global Missions",
    icon: "🌍",
    description:
      "Reaching nations with the gospel through mission trips, church planting, and international partnerships.",
    programs: ["Mission Trips", "Church Planting", "Global Partnerships"],
    impact: [
      { label: "Countries Reached", value: "15" },
      { label: "Missionaries Sent", value: "40+" },
    ],
  },
] as const;

// -- Component ---------------------------------------------------------
export default function MinistryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Derive active ministry from index to keep state single-source-of-truth
  const activeMinistry = useMemo(() => MINISTRIES[currentIndex], [currentIndex]);

  // Auto-cycle every 6s
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MINISTRIES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--primary-bg)" }}>
      {/* Mobile Modal (neumorphic in its component styles) */}
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
        {/* ====================== Hero ====================== */}
        <section className="max-w-8xl mx-auto mb-24">
          <div className="flex flex-col xl:flex-row items-center gap-16 mb-20">
            {/* Hero Copy */}
            <div className="flex-1 text-center xl:text-left max-w-3xl">
              <div className="mb-8">
                <span
                  className="inline-block px-6 py-3 rounded-full text-sm font-semibold mb-6"
                  style={{ background: "var(--accent-teal-light)", color: "white" }}
                >
                  Transforming Lives • Building Leaders • Serving Communities
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 text-gradient leading-tight">
                Our Ministry
              </h1>

              <p className="text-lg sm:text-2xl md:text-3xl mb-10 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Discover how House of Gideon empowers individuals to discover their God-given purpose through comprehensive
                ministry programs, leadership development, and community transformation.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center xl:justify-start mb-8">
                <Link
                  href="#programs"
                  className="neumorphic-button-primary px-8 sm:px-10 py-4 sm:py-5 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                >
                  Explore Programs
                </Link>
                <Link
                  href="#impact"
                  className="neumorphic-button px-8 sm:px-10 py-4 sm:py-5 font-semibold transition-all duration-300 hover:-translate-y-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  Our Impact
                </Link>
                <Link
                  href="/events"
                  className="neumorphic-button px-8 sm:px-10 py-4 sm:py-5 font-semibold transition-all duration-300 hover:-translate-y-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  Join Events
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">15+</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>Active Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">500+</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>Leaders Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">2,000+</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">8</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>Ministry Areas</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <div className="neumorphic-card p-0 overflow-hidden animate-fade-in">
                  <Image
                    src="/IMG-20250827-WA0015.jpg"
                    alt="House of Gideon Ministry"
                    width={800}
                    height={600}
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Raising Leaders</h3>
                    <p className="text-base sm:text-lg opacity-90">Who will impact their world for Christ</p>
                  </div>
                </div>

                {/* Floating Highlights */}
                <div className="absolute -bottom-8 -right-6 grid grid-cols-2 gap-4">
                  <div className="neumorphic-card p-3 sm:p-4 text-center animate-fade-in animate-delay-1">
                    <div className="text-xl sm:text-2xl mb-2">📚</div>
                    <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Teaching</div>
                  </div>
                  <div className="neumorphic-card p-3 sm:p-4 text-center animate-fade-in animate-delay-2">
                    <div className="text-xl sm:text-2xl mb-2">🌍</div>
                    <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Outreach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== Ministries ====================== */}
        <section id="programs" className="max-w-8xl mx-auto mb-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-gradient">Ministry Areas</h2>
            <p className="text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Eight comprehensive ministry areas designed to nurture spiritual growth, develop leadership, and create lasting
              community impact.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Navigation */}
            <div className="lg:w-1/3">
              <div className="neumorphic-card sticky top-8 p-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                  Ministry Focus
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4">
                  {MINISTRIES.map((m, idx) => (
                    <motion.button
                      key={m.id}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-300 font-semibold ${
                        idx === currentIndex
                          ? "bg-gradient-to-r from-teal-500 to-teal-400 text-white shadow-xl"
                          : "hover:bg-gray-50 text-[var(--text-primary)]"
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <motion.span
                          key={`${m.id}-icon`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 250, damping: 14 }}
                          className="text-xl sm:text-2xl"
                        >
                          {m.icon}
                        </motion.span>
                        <span>{m.label}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content (swipeable) */}
            <div className="lg:w-2/3">
              <div className="neumorphic-card min-h-[22rem] rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMinistry.id}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.35 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, info) => {
                      if (info.offset.x > 100) {
                        const prev = (currentIndex - 1 + MINISTRIES.length) % MINISTRIES.length;
                        setCurrentIndex(prev);
                      } else if (info.offset.x < -100) {
                        const next = (currentIndex + 1) % MINISTRIES.length;
                        setCurrentIndex(next);
                      }
                    }}
                    className="p-6"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full" style={{ background: "var(--accent-teal)", color: "white" }}>
                        <span className="text-2xl sm:text-3xl">{activeMinistry.icon}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gradient">{activeMinistry.label}</h3>
                    </div>

                    <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                      {activeMinistry.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-lg" style={{ background: "rgba(184, 212, 209, 0.1)" }}>
                        <h4 className="font-bold mb-3 text-lg sm:text-xl" style={{ color: "var(--text-primary)" }}>Programs</h4>
                        <ul className="space-y-2" style={{ color: "var(--text-secondary)" }}>
                          {activeMinistry.programs.map((p) => (
                            <li key={p} className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent-teal)" }} />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-6 rounded-lg" style={{ background: "rgba(184, 212, 209, 0.1)" }}>
                        <h4 className="font-bold mb-3 text-lg sm:text-xl" style={{ color: "var(--text-primary)" }}>Impact</h4>
                        <div className="space-y-3">
                          {activeMinistry.impact.map((row) => (
                            <div key={row.label} className="flex justify-between">
                              <span style={{ color: "var(--text-secondary)" }}>{row.label}</span>
                              <span className="font-bold text-gradient">{row.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="text-center mt-4 text-sm text-gray-500 lg:hidden">⇆ Swipe to explore</div>
            </div>
          </div>
        </section>

        {/* ====================== CTA ====================== */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="neumorphic-card text-center animate-fade-in p-6 sm:p-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gradient">Discover Your Purpose</h2>
            <p className="text-base sm:text-xl mb-8 max-w-3xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Join thousands who have discovered their God-given purpose through our comprehensive ministry programs. Your
              transformation journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="neumorphic-button-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
              >
                Join Our Programs
              </Link>
              <Link
                href="/contact"
                className="neumorphic-button px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1"
                style={{ color: 'var(--text-primary)' }}
              >
                Connect With Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
