import Image from "next/image";

export default function FounderPage() {
  return (
    <main className="flex flex-col items-center p-8">
      <div className="morphism-card animate-fade-in w-full max-w-md mb-6">
        <Image src="/bread-of-life.jpg" alt="Rev. Daniel Osinachi - Founder of House of Gideon" width={400} height={300} className="w-full mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Rev. Daniel Osinachi</h2>
        <p className="text-lg mb-2">Rev. Daniel Osinachi is the visionary leader and founder of House of Gideon. With a passion for spiritual growth and community transformation, he has dedicated his life to empowering others and spreading the message of hope.</p>
        <p className="text-md">His leadership, teaching, and outreach have impacted many lives and continue to inspire the ministry's mission.</p>
      </div>
    </main>
  );
}
