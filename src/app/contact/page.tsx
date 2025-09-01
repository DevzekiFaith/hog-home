"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import MobileModal from "../../components/MobileModal";
import { useState } from "react";

export default function ContactPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    meetingType: "pastoral"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { ...formData, selectedDate, selectedTime });
  };

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
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
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              We'd love to connect with you and welcome you to our church family.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Location */}
            <div className="neumorphic-card text-center animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--accent-teal), var(--accent-teal-dark))', color: 'white' }}>
                <span className="text-4xl">📍</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Visit Us</h3>
              <p className="leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                123 Gideon Street<br />
                Community Center<br />
                City, Country
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Sunday: 10:00 AM<br />
                Wednesday: 7:00 PM
              </p>
            </div>

            {/* Phone */}
            <div className="neumorphic-card text-center animate-fade-in animate-delay-1">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--accent-teal-light), var(--accent-teal))', color: 'white' }}>
                <span className="text-4xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Call Us</h3>
              <p className="leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                +234 800 123 4567
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Available Mon-Fri<br />
                9:00 AM - 5:00 PM
              </p>
            </div>

            {/* Email */}
            <div className="neumorphic-card text-center animate-fade-in animate-delay-2">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--accent-teal-dark), var(--accent-teal-light))', color: 'white' }}>
                <span className="text-4xl">✉️</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Email Us</h3>
              <p className="leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                info@houseofgideon.org
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                We'll respond within<br />
                24 hours
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Calendar Booking */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="neumorphic-card animate-fade-in animate-delay-3">
              <h2 className="text-3xl font-bold mb-8 text-gradient">Send Us A Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-0 focus:outline-none transition-all duration-300"
                    style={{ 
                      background: 'var(--primary-bg)',
                      color: 'var(--text-primary)',
                      boxShadow: 'inset 6px 6px 12px var(--shadow-dark), inset -6px -6px 12px var(--shadow-light)'
                    }}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-0 focus:outline-none transition-all duration-300"
                    style={{ 
                      background: 'var(--primary-bg)',
                      color: 'var(--text-primary)',
                      boxShadow: 'inset 6px 6px 12px var(--shadow-dark), inset -6px -6px 12px var(--shadow-light)'
                    }}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-0 focus:outline-none transition-all duration-300"
                    style={{ 
                      background: 'var(--primary-bg)',
                      color: 'var(--text-primary)',
                      boxShadow: 'inset 6px 6px 12px var(--shadow-dark), inset -6px -6px 12px var(--shadow-light)'
                    }}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-0 focus:outline-none transition-all duration-300 resize-none"
                    style={{ 
                      background: 'var(--primary-bg)',
                      color: 'var(--text-primary)',
                      boxShadow: 'inset 6px 6px 12px var(--shadow-dark), inset -6px -6px 12px var(--shadow-light)'
                    }}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="neumorphic-button-primary w-full py-4 font-semibold text-white transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Calendar Booking Component */}
            <div className="neumorphic-card animate-fade-in animate-delay-4">
              <h2 className="text-3xl font-bold mb-8 text-gradient">Book A Meeting</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="meetingType" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Meeting Type
                  </label>
                  <select
                    id="meetingType"
                    name="meetingType"
                    value={formData.meetingType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-0 focus:outline-none transition-all duration-300"
                    style={{ 
                      background: 'var(--primary-bg)',
                      color: 'var(--text-primary)',
                      boxShadow: 'inset 6px 6px 12px var(--shadow-dark), inset -6px -6px 12px var(--shadow-light)'
                    }}
                  >
                    <option value="pastoral">Pastoral Care</option>
                    <option value="counseling">Counseling Session</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="general">General Meeting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Select Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={getCurrentDate()}
                    className="w-full px-4 py-3 border-0 focus:outline-none transition-all duration-300"
                    style={{ 
                      background: 'var(--primary-bg)',
                      color: 'var(--text-primary)',
                      boxShadow: 'inset 6px 6px 12px var(--shadow-dark), inset -6px -6px 12px var(--shadow-light)'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-3 font-medium transition-all duration-300 ${
                          selectedTime === time
                            ? 'text-white'
                            : ''
                        }`}
                        style={{
                          background: selectedTime === time 
                            ? 'linear-gradient(135deg, var(--accent-teal), var(--accent-teal-dark))'
                            : 'var(--secondary-bg)',
                          color: selectedTime === time ? 'white' : 'var(--text-primary)',
                          boxShadow: selectedTime === time
                            ? '6px 6px 12px rgba(125, 211, 192, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.8)'
                            : '4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light)'
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedDate && selectedTime && (
                  <div className="p-4" style={{ background: 'var(--accent-teal-light)', color: 'var(--text-primary)' }}>
                    <p className="font-semibold">Meeting Summary:</p>
                    <p>{formData.meetingType.charAt(0).toUpperCase() + formData.meetingType.slice(1)} on {selectedDate} at {selectedTime}</p>
                  </div>
                )}

                <button
                  type="button"
                  disabled={!selectedDate || !selectedTime}
                  className={`w-full py-4 font-semibold transition-all duration-300 ${
                    selectedDate && selectedTime
                      ? 'neumorphic-button-primary text-white hover:transform hover:-translate-y-1'
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                  style={{
                    background: selectedDate && selectedTime 
                      ? 'linear-gradient(135deg, var(--accent-teal), var(--accent-teal-dark))'
                      : 'var(--secondary-bg)',
                    color: selectedDate && selectedTime ? 'white' : 'var(--text-muted)',
                    boxShadow: selectedDate && selectedTime
                      ? '6px 6px 12px rgba(125, 211, 192, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.8)'
                      : '3px 3px 6px var(--shadow-dark), -3px -3px 6px var(--shadow-light)'
                  }}
                >
                  Book Meeting
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Church Image Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="neumorphic-card p-0 overflow-hidden animate-fade-in animate-delay-4">
            <img 
              src="/IMG-20250827-WA0014.jpg" 
              alt="House of Gideon Contact" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gradient">We're Here For You</h3>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Whether you're seeking spiritual guidance, have questions about our church, or simply want to connect with our community, we're here to help. Don't hesitate to reach out!
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-gradient">House of Gideon</h3>
              <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>
                Empowering lives, transforming communities.
              </p>
            </div>
            <div className="flex gap-6">
              <Link href="/" className="neumorphic-button px-4 py-2 transition-all duration-300 hover:transform hover:-translate-y-1">
                Home
              </Link>
              <Link href="/about" className="neumorphic-button px-4 py-2 transition-all duration-300 hover:transform hover:-translate-y-1">
                About
              </Link>
              <Link href="/events" className="neumorphic-button px-4 py-2 transition-all duration-300 hover:transform hover:-translate-y-1">
                Events
              </Link>
            </div>
          </div>
          <div className="border-t pt-6" style={{ borderColor: 'var(--border-soft)' }}>
            <p className="text-center" style={{ color: 'var(--text-muted)' }}>
              &copy; {new Date().getFullYear()} House of Gideon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
