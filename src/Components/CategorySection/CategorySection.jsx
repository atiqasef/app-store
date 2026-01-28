import React, { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export default function CategorySection() {
  const [apps, setApps] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/app.json")
      .then(res => res.json())
      .then(data => setApps(data));
  }, []);

  const categories = ["All", "Education", "Productivity", "Gaming"];

  const filteredApps =
    selectedCategory === "All"
      ? apps
      : apps.filter(app => app.category === selectedCategory);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">
        <p className="flex items-center gap-3"><BiCategory /> Browse by Category</p>
      </h2>

      {/* Category Buttons */}
      <div className="flex gap-3 flex-wrap mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`btn btn-sm ${
              selectedCategory === category
                ? "btn-primary"
                : "btn-outline"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredApps.map(app => (
          <div key={app.id} className="card bg-base-100 shadow-md">
            <figure>
              <img
                src={app.thumbnail}
                alt={app.name}
                className="h-40 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h3 className="font-semibold">{app.name}</h3>
             <p className="flex gap-3 items-center"> <FaStarHalfAlt /> {app.rating}</p>
             <p className="flex gap-3 items-center"><IoMdDownload /> {app.downloads.toLocaleString()}</p>
             

              <button className="btn btn-primary btn-sm">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredApps.length === 0 && (
        <p className="text-center mt-6 text-gray-500">
          No apps found in this category.
        </p>
      )}
    </section>
  );
}
