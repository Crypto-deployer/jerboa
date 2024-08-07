"use client";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setZoom(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex justify-center items-center overflow-hidden">
      <Head>
        <title>Wide-Eyed Owl</title>
      </Head>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div className="z-10 text-center">
        <div className="relative inline-block">
          <Image
            src="/jerboa.jpeg"
            alt="Wide-eyed owl"
            width={1000}
            height={1000}
            className={`max-w-full h-auto rounded-full shadow-lg ${
              zoom ? "scale-150" : "scale-100"
            } transition-transform duration-10000 ease-in-out`}
          />
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <Image src="/twitter.svg" width={50} height={50} alt="twitter" />
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors"
          ></a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors"
          >
            <Image src="/telegram.svg" alt="telegram" width={50} height={50} />
          </a>
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors font-bold"
          >
            DexScreener
          </a>
        </div>
      </div>
      <style jsx>{`
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 5s infinite;
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
