
import Navbar from "../components/Navbar";
import MobileModal from "../components/MobileModal";
import HeroPage from "@/components/Hero/HeroPage";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
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
      <div>
        <HeroPage />
      </div>
  <main className="flex-1 flex flex-col items-center justify-center p-8 no-radius">
        <div className="flex justify-between w-full max-w-4xl mb-4">
          <Link href="/contact" className="flex items-center gap-2 text-blue-600 hover:underline">
            <span className="text-2xl">&#8592;</span> Contact
          </Link>
          <Link href="/about" className="flex items-center gap-2 text-blue-600 hover:underline">
            About <span className="text-2xl">&#8594;</span>
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to House of Gideon</h1>
        <p className="text-lg mb-8 text-center">Empowering lives, transforming communities.</p>
        <img src="/IMG-20250827-WA0008.jpg" alt="Church" className="rounded-lg shadow-lg w-full max-w-md mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <Link href="/about" className="morphism-card animate-fade-in hover:scale-105 transition-transform duration-200 group">
            <div className="flex items-center gap-3 mb-2">
              <img src="/IMG-20250827-WA0009.jpg" alt="About Icon" className="w-10 h-10 rounded-full shadow" />
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600">About Us</h2>
            </div>
            <p className="text-gray-600 mb-2">Learn more about our church, mission, and values.</p>
            <span className="text-blue-500 font-medium group-hover:underline">Read More →</span>
          </Link>
          <Link href="/events" className="morphism-card animate-fade-in animate-delay-1 hover:scale-105 transition-transform duration-200 group">
            <div className="flex items-center gap-3 mb-2">
              <img src="/IMG-20250827-WA0011.jpg" alt="Events Icon" className="w-10 h-10 rounded-full shadow" />
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600">Events</h2>
            </div>
            <p className="text-gray-600 mb-2">Stay updated with our upcoming events and programs.</p>
            <span className="text-blue-500 font-medium group-hover:underline">See Events →</span>
          </Link>
          <Link href="/ministry" className="morphism-card animate-fade-in animate-delay-2 hover:scale-105 transition-transform duration-200 group">
            <div className="flex items-center gap-3 mb-2">
              <img src="/IMG-20250827-WA0015.jpg" alt="Ministry Icon" className="w-10 h-10 rounded-full shadow" />
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600">Ministry</h2>
            </div>
            <p className="text-gray-600 mb-2">Discover our ministry, vision, and impact.</p>
            <span className="text-blue-500 font-medium group-hover:underline">Explore Ministry →</span>
          </Link>
          <Link href="/contact" className="morphism-card animate-fade-in animate-delay-3 hover:scale-105 transition-transform duration-200 group">
            <div className="flex items-center gap-3 mb-2">
              <img src="/IMG-20250827-WA0014.jpg" alt="Contact Icon" className="w-10 h-10 rounded-full shadow" />
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600">Contact</h2>
            </div>
            <p className="text-gray-600 mb-2">Get in touch with House of Gideon.</p>
            <span className="text-blue-500 font-medium group-hover:underline">Contact Us →</span>
          </Link>
        </div>
      </main>
      <footer className="bg-gray-100 py-4 text-center">
        <div className="flex justify-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <p className="mt-2">&copy; {new Date().getFullYear()} House of Gideon. All rights reserved.</p>
      </footer>
    </div>
  );
}
