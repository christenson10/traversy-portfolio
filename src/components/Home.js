import React from "react";
import image from "../black-and-white-mountain-photo-l.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="black and white mountains"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-yellow-300 font-bold leading-none lg:leading-snug home-name">Welcome.</h1>
      </section>
    </main>
  );
}
