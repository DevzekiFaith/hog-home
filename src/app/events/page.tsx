import Link from "next/link";

export default function EventsPage() {
  return (
    <main className="flex flex-col items-center p-8">
      <div className="flex justify-between w-full max-w-2xl mb-4">
        <Link href="/about" className="flex items-center gap-2 text-blue-600 hover:underline">
          <span className="text-2xl">&#8592;</span> About
        </Link>
        <Link href="/ministry" className="flex items-center gap-2 text-blue-600 hover:underline">
          Ministry <span className="text-2xl">&#8594;</span>
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <img src="/IMG-20250827-WA0011.jpg" alt="Church Event" className="rounded-lg shadow-lg w-full max-w-md mb-6" />
      <p className="text-lg mb-4 text-center max-w-2xl">
        Stay updated with our upcoming events and programs. We host regular worship services, youth gatherings, outreach programs, and special events for the community.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="morphism-card animate-fade-in w-full max-w-md mb-6">
          <div className="flex items-center gap-3 mb-2">
            <img src="/IMG-20250827-WA0012.jpg" alt="Sunday Worship" className="w-12 h-12 rounded-full" />
            <h2 className="text-xl font-semibold text-gray-800">Sunday Worship</h2>
          </div>
          <p className="text-gray-700 font-medium mb-2">Every Sunday at <span className="text-blue-600">10:00 AM</span></p>
          <p className="text-gray-600">Join us for a powerful worship experience, inspiring message, and fellowship.</p>
        </div>
        <div className="morphism-card animate-fade-in animate-delay-1 w-full max-w-md mb-6">
          <div className="flex items-center gap-3 mb-2">
            <img src="/IMG-20250827-WA0013.jpg" alt="Youth Fellowship" className="w-12 h-12 rounded-full" />
            <h2 className="text-xl font-semibold text-gray-800">Youth Fellowship</h2>
          </div>
          <p className="text-gray-700 font-medium mb-2">Fridays at <span className="text-blue-600">6:00 PM</span></p>
          <p className="text-gray-600">A vibrant gathering for young people to connect, grow, and serve together.</p>
        </div>
      </div>
    </main>
  );
}
