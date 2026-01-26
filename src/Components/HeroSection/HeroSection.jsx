import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";

export default function HeroSection() {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    fetch("/app.json")
      .then(res => res.json())
      .then(setAppData);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex justify-center items-center">
        <div className="w-5/12">
        <h1 className="text-3xl">Introduce your AppStore and showcase trending/promotional apps.</h1>
        <h3 className="text-xl my-3">Discover Apps You’ll Love</h3>
        <h3 className="text-lg">Trending, Top Rated, and New Apps at Your Fingertips</h3>
        <Link to='/apps'><div className="btn btn-primary btn-sm mt-3">Explore Apps</div></Link>
        
        </div>
        <div className="w-7/12 flex justify-center">
      <div className="w-full max-w-4xl">
        <Slider {...settings}>
          {appData.map((d, i) => (
            <div key={i}>
              <div className="card bg-base-100 shadow-lg">
                <figure>
                  <img
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                    src={d.thumbnail}
                    alt={d.name}
                    className="w-full h-64 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{d.name}</h2>
                  <p>{d.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
}
