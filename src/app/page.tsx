import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png"

export default function Home() {
  return (
    <main>
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
      <div className="h-80 bg-gradient-to-b from-cyan-400 from-20% via-blue-600 via-65% to-cyan-600 to-90% text-xl">My name is Sergei</div>
      <div className="img-2"></div>
      <div className="h-80 bg-gradient-to-b from-cyan-500 from-5% via-blue-900 via-65% to-blue-950 to-100%  text-xl">My name is Sergei</div>
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