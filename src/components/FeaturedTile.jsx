"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const FeaturedTile = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const fetchTiles = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setTiles(data.slice(0, 4)); // first 4 tiles
    };

    fetchTiles();
  }, []);

  return (
    <section>
      <h2 className="text-5xl font-semibold font-cormorant text-center mt-20 mb-10">
        Featured Tiles
      </h2>
      <div className="font-geist grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiles.map((tile, index) => (
          <div key={index} className="card bg-base-200 w-77 shadow-sm">
            <figure className="px-5 pt-8">
              <Image
                src={tile.image}
                width={380}
                height={380}
                alt={tile.title}
              ></Image>
            </figure>
            <div className="space-y-3 card-body items-center text-center">
              <h2 className=" card-title">{tile.title}</h2>
              <p>{tile.description}</p>
              <div className="w-full flex justify-between items-center">
                <div className="badge badge-neutral badge-outline font-cormorant text-lg font-semibold px-4 py-3">
                  {tile.category}
                </div>
                <button className="flex items-center gap-1 border-b border-primary text-primary hover:cursor-pointer">
                  Buy Now <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTile;
