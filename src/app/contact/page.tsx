import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center p-8">
      <div className="flex justify-between w-full max-w-2xl mb-4">
        <Link href="/ministry" className="flex items-center gap-2 text-blue-600 hover:underline">
          <span className="text-2xl">&#8592;</span> Ministry
        </Link>
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:underline">
          Home <span className="text-2xl">&#8594;</span>
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="morphism-card animate-fade-in w-full max-w-md mb-6">
        <img src="/IMG-20250827-WA0014.jpg" alt="Contact House of Gideon" className="w-full rounded-lg mb-4" />
        <p className="text-lg text-gray-800 mb-2">
          Get in touch with House of Gideon. We would love to hear from you!
        </p>
      </div>
      <div className="morphism-card animate-fade-in animate-delay-1 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Contact Details</h2>
        <p className="text-gray-700 font-medium">Email: <span className="text-blue-600">info@houseofgideon.org</span></p>
        <p className="text-gray-700 font-medium">Phone: <span className="text-blue-600">+234 800 123 4567</span></p>
        <p className="text-gray-700 font-medium">Address: <span className="text-blue-600">123 Gideon Street, City, Country</span></p>
      </div>
    </main>
  );
}
