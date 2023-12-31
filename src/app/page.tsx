import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png"
import heroImage from "../../public/images/hero-photo.jpg"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <header>
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            height={80}
          />
        </Link>
      </header>
      <div className="img-1"></div>
      <Image className="w-96 absolute" src={heroImage} alt="Sergei" />
      <div className="h-44 bg-gradient-to-b from-cyan-300 to-cyan-500 text-xl">
        Text goes here...</div>
      <div className="img-2"></div>
      <div className="h-72 bg-gradient-to-b from-cyan-500 to-cyan-700 text-xl">And here...</div>
      <div className="img-3"></div>
      <div className="background-wrap">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
      </div>
    </main>
  )
}