import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Navbar from "../Header/Navbar";
import { BiSolidError } from "react-icons/bi";

export default function TrendingAppsDetails() {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  const [installed, setInstalled] = useState(false);
  const [hasInstalledBefore, setHasInstalledBefore] = useState(false);

  useEffect(() => {
    fetch("/app.json")
      .then(res => res.json())
      .then(data => {
        const selectedApp = data.find(item => item.id === id);
        setApp(selectedApp);
      });
  }, [id]);

  const handleInstallToggle = () => {
    if (!installed) {
      setInstalled(true);
      setHasInstalledBefore(true);
    } else {
      setInstalled(false);
    }
  };

  if (!app) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        <img
          src={app.thumbnail}
          alt={app.name}
          className="w-full h-64 object-cover rounded mb-6"
        />

        <h1 className="text-3xl font-bold">{app.name}</h1>
        <p className="text-gray-600 mt-2 mb-4">
          {app.description}
        </p>

        {/* Install / Uninstall */}
        <button
          onClick={handleInstallToggle}
          className={`btn ${
            installed ? "btn-error" : "btn-primary"
          }`}
        >
          {installed ? "Uninstall" : "Install"}
        </button>

        {/* Review Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">
            Write a Review
          </h2>

          {hasInstalledBefore ? (
            <form className="space-y-3">
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Write your review..."
              ></textarea>
              <button className="btn btn-success">
                Submit Review
              </button>
            </form>
          ) : (
            <p className="text-red-500 flex items-center gap-3">
              <BiSolidError /> You must install this app at least once to submit a review.
            </p>
          )}
        </div>

        <Link to="/" className="block mt-6">
          <button className="btn btn-outline">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
