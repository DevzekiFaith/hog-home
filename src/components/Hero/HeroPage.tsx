// app/hero/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroPage() {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect (image moves slower than scroll)
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section
      ref={ref}
      aria-label="Bread of Life Program Hero"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <div className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/church1.jpg"
            alt="Ministry Program"
            fill
            priority
            className="object-cover z-0"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
          >
            Bread of Life Program
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg md:text-2xl text-white mb-6 drop-shadow"
          >
            Join us for a life-changing experience with worship, teaching, and fellowship.
          </motion.p>

          {/* Pulsing Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Link
                href="/events"
                className="bg-blue-600 text-white px-6 py-3 font-semibold text-lg shadow-lg rounded-lg hover:bg-blue-700 transition"
              >
                See Upcoming Events
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
