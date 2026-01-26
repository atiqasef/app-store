import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Navbar from "../Header/Navbar";

export default function TrendingAppsDetails() {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    fetch("/app.json")
      .then(res => res.json())
      .then(data => {
        const selectedApp = data.find(item => item.id === id);
        setApp(selectedApp);
      });
  }, [id]);

  if (!app) return <p>Loading...</p>;

  return (
    <div>
        <Navbar></Navbar>
        <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{app.name}</h1>
      <p className="text-gray-600 mt-2">{app.description}</p>
      <img src={app.thumbnail} alt="" />
     <Link to='/'> <div className="btn btn-primary">Back to home</div></Link>
    </div>
    </div>
  );
}

