import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  console.log("Executing...");
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>

      {/* not give us a single-page application (SPA) */}
      {/* <p><a href="/about">About</a></p> */}

      {/* SPA, We are not leaving the page or not loading a brand new page. The content of the next page will still be rendered on the server and was updated by js code from client-side */}
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}