import Link from "next/link";

export default function MinistryPage() {
  return (
    <main className="flex flex-col items-center p-8">
      <div className="flex justify-between w-full max-w-2xl mb-4">
        <Link href="/events" className="flex items-center gap-2 text-blue-600 group transition-colors duration-200">
          <span className="arrow-icon group-hover:-translate-x-1 transition-transform duration-200">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span className="font-medium">Events</span>
        </Link>
        <Link href="/contact" className="flex items-center gap-2 text-blue-600 group transition-colors duration-200">
          <span className="font-medium">Contact</span>
          <span className="arrow-icon group-hover:translate-x-1 transition-transform duration-200">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">About Ministry: House of Gideon</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl mb-6">
        <div className="morphism-card animate-fade-in flex-1">
          <img src="/IMG-20250827-WA0015.jpg" alt="Ministry" className="w-full rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p className="text-lg mb-2">Raise leaders who will impact their world for Christ.</p>
          <h3 className="text-xl font-semibold mb-1">Our Commitment</h3>
          <p className="mb-2">Spiritual growth, leadership development, and community transformation.</p>
        </div>
        <div className="morphism-card animate-fade-in animate-delay-1 flex-1">
          <img src="/IMG-20250827-WA0016.jpg" alt="Ministry Impact" className="w-full rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-1">How We Empower</h3>
          <ul className="list-disc pl-5 mb-2">
            <li>Teaching</li>
            <li>Outreach</li>
            <li>Discipleship</li>
          </ul>
          <p>We empower individuals to discover and fulfill their God-given purpose.</p>
        </div>
      </div>
    </main>
  );
}
