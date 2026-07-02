"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";


const tilesPromise = fetch("/data.json").then((res) => res.json());

const TileCard = () => {


      const data = use(tilesPromise);
      const tiles = data.slice(0, 4);




  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-primary/80">
            Curated collection
          </p>
          <h2 className="font-cormorant text-4xl font-semibold">
            Featured Tiles
          </h2>
        </div>

        <div className="font-geist grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {tiles.map((tile, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-4xl border border-base-300 bg-base-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative p-4 sm:p-5">
                <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[4px]  backdrop-blur z-10">
                  {tile.category}
                </span>
                <figure className="overflow-hidden rounded-[1.4rem]">
                  <Image
                    src={tile.image}
                    width={380}
                    height={380}
                    alt={tile.title}
                    className=" w-full rounded-[1.4rem] object-cover transition duration-500 group-hover:scale-105"
                  />
                </figure>
              </div>

              <div className="space-y-4 p-6 border-t border-gray-200">
                <div className="space-y-2">
                  <h3 className="font-cormorant text-2xl font-semibold text-base-content">
                    {tile.title}
                  </h3>
                  <p className="text-sm  text-slate-500">{tile.description}</p>
                </div>

                <div className="flex items-center justify-between border-t border-base-300/70 pt-4">
                  <div></div>
                  <Link href={`/tile/${tile.id}`} data={data} className="flex items-center gap-2 font-semibold text-blue-600 border-b transition-transform duration-300 hover:translate-x-1 hover:cursor-pointer">
                    View Details<FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TileCard;
