"use client";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setZoom(true), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-blue-900 to-gray-900 flex flex-col">
      <Head>
        <title>Jerboa CTO</title>
      </Head>
      <div className=" text-gray-100 py-4 px-6 flex justify-between items-center">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Jerboa CTO
        </h1>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-100 transition-colors"
          >
            <Image src="/twitter.svg" width={50} height={50} alt="twitter" />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-100 transition-colors"
          >
            <Image src="/telegram.svg" alt="telegram" width={50} height={50} />
          </a>
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-100 transition-colors font-bold"
          >
            <Image
              src={"/dexscreener.png"}
              alt="dexscreener link"
              height={50}
              width={50}
            />
          </a>
        </div>
      </div>
      <div className="flex-grow flex justify-center items-center overflow-hidden relative">
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/jerboa.jpeg"
              alt="Wide-eyed owl"
              width={1000}
              height={1000}
              className={`max-w-full h-auto rounded-full shadow-lg ${
                zoom
                  ? "scale-[2.25] translate-x-[10%] translate-y-[30%]"
                  : "scale-100"
              } transition-all duration-3000 ease-in-out`}
            />
          </div>
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
