import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md">
        <div className="text-sm font-semibold text-gray-500">
          Fed Gymforol fststtoiog. sray
        </div>
        <nav className="space-x-6 text-sm text-gray-700">
          <a href="#" className="hover:underline">Emads</a>
          <a href="#" className="hover:underline">BOd tips</a>
          <a href="#" className="hover:underline">D'ovre</a>
          <a href="#" className="hover:underline">Gviopiss</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-10">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-snug">
            Get Professional <br />
            <span className="text-black">Assignment help - 24/7</span>
          </h1>
          <p className="mt-4 text-gray-600 text-sm">
            Professional academic writers. Plagiarism-free. Global delivery. Trusted by students.
          </p>
          <button className="mt-6 bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded shadow">
            Chat Now
          </button>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src="/path-to-your-image.png"
            alt="Woman writing at desk"
            className="w-full max-w-sm rounded-md shadow-lg"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-10 px-6">
        <h2 className="text-center text-2xl font-bold mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-sm text-gray-600">
              "Excellent writing service, fast delivery, and great communication."
            </p>
            <p className="mt-2 font-bold text-teal-700">Goosp ore</p>
            <p className="text-yellow-500">★★★★★</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              "Got an A+ on my term paper. Highly recommended."
            </p>
            <p className="mt-2 font-bold text-teal-700">Getcinti</p>
            <p className="text-yellow-500">★★★★★</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              "The support team is so helpful and polite."
            </p>
            <p className="mt-2 font-bold text-teal-700">Se bore</p>
            <p className="text-yellow-500">★★★★★</p>
          </div>
        </div>
      </section>
    </div>
  );
}
