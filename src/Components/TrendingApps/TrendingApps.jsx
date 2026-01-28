import React, { useEffect, useState } from "react";
import { FaFire, FaStarHalfAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router";

export default function TrendingApps() {
  const [trending, setTrending] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/app.json")
      .then(res => res.json())
      .then(data => {
        const trendingApps = data.filter(app => app.trending_apps);
        setTrending(trendingApps);
      });
  }, []);

 
  const visibleApps = showAll ? trending : trending.slice(0, 4);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">
        <p className="flex gap-3 items-center"><FaFire /> Trending Apps</p>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {visibleApps.map(app => (
          <div
            key={app.id}
            className="card bg-base-100 shadow-md relative"
          >
            <span className="badge badge-secondary absolute top-2 right-2">
              Trending
            </span>

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

             <Link to={`/app/${app.id}`}>
              <button className="btn btn-primary btn-sm">
                View Details
              </button></Link>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {trending.length > 4 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-outline btn-primary"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}
