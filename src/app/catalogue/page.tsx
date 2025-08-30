import Image from "next/image";

export default function CataloguePage() {
  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-4">Ministry Catalogue</h1>
      <div className="morphism-card animate-fade-in w-full max-w-2xl mb-6">
        <Image src="/bread-of-life.jpg" alt="Ministry Event" width={600} height={400} className="w-full rounded-lg mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Bread of Life Event</h2>
        <p className="text-lg mb-2">A highlight of our ministry, bringing together believers for worship, teaching, and fellowship.</p>
      </div>
      {/* Add more catalogue items here as needed */}
    </main>
  );
}
