"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import MobileModal from "../../components/MobileModal";
import { useState } from "react";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [activeTab, setActiveTab] = useState("contact");
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

    // Show success message
    alert("Thank you for your message! We'll get back to you soon.");

    // Reset form
    if (activeTab === "contact") {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        meetingType: "pastoral"
      });
    } else {
      setSelectedDate("");
      setSelectedTime("");
      setFormData(prev => ({
        ...prev,
        meetingType: "pastoral"
      }));
    }
  };

  const scrollToSection = (sectionId: string, tab: string) => {
    setActiveTab(tab);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileModal>
          <Navbar />
        </MobileModal>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We'd love to connect with you and welcome you to our church family.
          </p>

          {/* Navigation Tabs */}
          <div className="inline-flex p-1 bg-gray-800 rounded-xl mb-12">
            <button
              onClick={() => scrollToSection('contact-form', 'contact')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === 'contact'
                ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                : 'text-gray-300 hover:text-white'
                }`}
            >
              Send Us a Message
            </button>
            <button
              onClick={() => scrollToSection('booking-form', 'booking')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === 'booking'
                ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                : 'text-gray-300 hover:text-white'
                }`}
            >
              Book an Appointment
            </button>
          </div>
        </section>

        {/* Contact Information */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Location */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-300 hover:bg-gray-800/70 hover:shadow-xl">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Visit Us</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                123 Gideon Street<br />
                Community Center<br />
                City, Country
              </p>
              <div className="mt-6 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  <span className="font-medium">Sunday:</span> 10:00 AM<br />
                  <span className="font-medium">Wednesday:</span> 7:00 PM
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-300 hover:bg-gray-800/70 hover:shadow-xl">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Call Us</h3>
              <p className="text-2xl font-semibold text-white mb-4">
                +234 800 123 4567
              </p>
              <div className="mt-6 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  <span className="font-medium">Available:</span> Mon-Fri<br />
                  <span className="font-medium">Hours:</span> 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-300 hover:bg-gray-800/70 hover:shadow-xl">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Email Us</h3>
              <p className="text-xl font-semibold text-white mb-4">
                info@houseofgideon.org
              </p>
              <div className="mt-6 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  We'll respond within <span className="font-medium">24 hours</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Booking Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <section id="contact-form" className="w-full">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="block w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="block w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Your Message</label>
                    <div className="relative">
                      <div className="absolute top-3 left-3">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-2.5l-2 2-2-2H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM4 7v6h2.5l2 2 2-2H14V7H4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 hover:-translate-y-0.5"
                      style={{
                        background: 'linear-gradient(135deg, var(--accent-teal), var(--accent-teal-dark))',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      Send Message
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                </form>
              </div>
            </section>

            {/* Booking Section */}
            <section id="booking-form" className="max-w-4xl mx-auto">
              <div className="neumorphic-card p-8 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
                  Book an Appointment
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="relative group">
                      <label htmlFor="meetingType" className="block mb-2 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Meeting Type</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <select
                          id="meetingType"
                          name="meetingType"
                          value={formData.meetingType}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none transition-all duration-300 bg-gray-800 text-white border border-gray-600"
                        >
                          <option value="pastoral">Pastoral Counseling</option>
                          <option value="prayer">Prayer Request</option>
                          <option value="membership">Membership Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="relative group">
                      <label htmlFor="date" className="block mb-2 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Preferred Date</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <input
                          type="date"
                          id="date"
                          min={getCurrentDate()}
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                          style={{
                            background: 'var(--card-bg)',
                            color: 'var(--text-primary)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Preferred Time</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 px-2 rounded-xl text-center transition-all duration-300 ${selectedTime === time ? 'scale-105' : 'hover:scale-105'
                            }`}
                          style={{
                            color: selectedTime === time ? 'white' : 'var(--text-primary)',
                            background: selectedTime === time
                              ? 'linear-gradient(135deg, var(--accent-teal), var(--accent-teal-dark))'
                              : 'var(--card-bg)',
                            border: '1px solid',
                            borderColor: selectedTime === time
                              ? 'rgba(255, 255, 255, 0.2)'
                              : 'rgba(255, 255, 255, 0.1)',
                            boxShadow: selectedTime === time
                              ? '0 4px 15px rgba(0, 0, 0, 0.2)'
                              : '0 2px 5px rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      className={`px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 ${(!selectedDate || !selectedTime) ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-teal-500/20 hover:-translate-y-0.5'
                        }`}
                      style={{
                        background: 'linear-gradient(135deg, var(--accent-teal), var(--accent-teal-dark))',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                      }}
                      disabled={!selectedDate || !selectedTime}
                    >
                      Book Appointment
                      <span className="ml-2">→</span>
                    </button>

                    {(!selectedDate || !selectedTime) && (
                      <p className="text-sm mt-3 text-amber-400">
                        Please select both date and time to continue
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>

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
        <Footer />
      </main>
    </div>
  );
}
