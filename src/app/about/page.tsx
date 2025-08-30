import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center p-8">
      <div className="flex justify-between w-full max-w-2xl mb-4">
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:underline">
          <span className="text-2xl">&#8592;</span> Home
        </Link>
        <Link href="/events" className="flex items-center gap-2 text-blue-600 hover:underline">
          Events <span className="text-2xl">&#8594;</span>
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl mb-6 items-center">
        <div className="flex-1 morphism-card animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">About House of Gideon</h2>
          <p className="text-lg mb-4">House of Gideon is a vibrant church community dedicated to empowering lives and transforming communities through faith, service, and love. Our mission is to reach out, inspire, and nurture spiritual growth in all generations.</p>
          <p className="text-md">We value unity, compassion, and the pursuit of purpose. Join us as we worship, serve, and grow together in Christ.</p>
        </div>
        <div className="flex-1 morphism-card animate-fade-in animate-delay-1 flex items-center justify-center">
          <img src="/IMG-20250827-WA0009.jpg" alt="Church Members" className="w-full h-auto object-cover" />
        </div>
      </div>
    </main>
  );
}
