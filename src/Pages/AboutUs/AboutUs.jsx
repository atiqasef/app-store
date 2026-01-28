import React from "react";
import { Helmet } from "react-helmet";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegLightbulb, FaRocket } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <Helmet>
        <title>AppStore | About Us</title>
      </Helmet>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About AppStore</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover, explore, and download the best apps — all in one place.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-3"><FaRocket /> Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to help users easily discover high-quality apps
              across different categories like productivity, education, gaming,
              and more.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-3"><AiOutlineGlobal /> Our Vision</h2>
            <p className="text-gray-600">
              We envision a platform where developers can showcase their apps
              and users can find trusted applications without confusion.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-3"><FaRegLightbulb /> Why Choose Us?</h2>
            <p className="text-gray-600">
              Curated apps, honest reviews, trending lists, and a clean user
              experience — built for simplicity and speed.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="mt-12 text-center text-gray-500">
        <p>
          Built with ❤️ using React & Tailwind CSS.
        </p>
      </div>
    </div>
  );
}
