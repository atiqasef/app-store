import React from "react";
import { Helmet } from "react-helmet";
import { FaBriefcaseMedical, FaMapPin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Support() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Helmet>
        <title>AppStore | Support</title>
      </Helmet>
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Support Center</h1>
        <p className="text-gray-500">
          Need help? We’re here to support you.
        </p>
      </div>

      {/* Support Options */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* FAQ */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-3"><FaMapPin /> Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find quick answers about app downloads, categories, reviews, and
              trending apps.
            </p>
            <button className="btn btn-outline btn-sm mt-4">
              View FAQs
            </button>
          </div>
        </div>

        {/* Contact */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-3"><MdEmail /> Contact Support</h2>
            <p className="text-gray-600">
              Still need help? Reach out to our support team anytime.
            </p>
            <p className="mt-2 font-medium">
              Email: support@appstore.com
            </p>
          </div>
        </div>
      </div>

      {/* Support Form */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title mb-4 flex gap-3 items-center"><FaBriefcaseMedical /> Send Us a Message</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>

          <textarea
            className="textarea textarea-bordered w-full mt-4"
            placeholder="Describe your issue..."
          ></textarea>

          <button className="btn btn-primary mt-4 w-full md:w-auto">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
