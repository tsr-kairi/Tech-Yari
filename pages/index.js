import Head from "next/head";
// import Header from "../components/Header";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <div className="bg-green-50 h-auto">
      <Head>
        <title>Techyari</title>
      </Head>

      {/* Hero */}
      <Hero />
    </div>
  );
}
