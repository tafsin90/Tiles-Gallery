"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use } from "react";
import { FaArrowLeftLong, FaHeart } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";

const tilesPromise = fetch("/data.json").then((res) => res.json());

const TileDetailPage = ({ params }) => {
  const { id } = use(params);
  const data = use(tilesPromise);
  const tile = data.find((t) => String(t.id) === String(id));
  const router = useRouter();

  return (
    <div className="font-geist mx-auto max-w-10/12 px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between gap-4">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
        >
          <FaArrowLeftLong className="text-xs" />
          Go Back
        </button>

        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
            <IoShareSocial />
            Share URL
          </button>
          <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600">
            <FaHeart className="text-rose-500" />
            Wishlist
          </button>
        </div>
      </nav>

      <section className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="group relative overflow-hidden rounded-4xl border border-base-300 bg-base-100 p-4 shadow-lg sm:p-5">
          <span className="absolute left-8 top-8 z-10 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[4px] text-slate-700">
            {tile.category}
          </span>
          <figure className="overflow-hidden rounded-[1.4rem]">
            <Image
              src={tile.image}
              alt={tile.title}
              width={900}
              height={900}
              className=" transition duration-500 group-hover:scale-105"
            />
          </figure>
        </div>

        <aside>
          <div className="rounded-4xl border border-base-300 bg-base-100 p-6 shadow-lg sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-primary/80">
              {tile.material}
            </p>
            <h1 className="mt-3 font-cormorant text-4xl font-semibold  text-slate-900 lg:text-5xl">
              {tile.title}
            </h1>
            <p className="mt-4 text-3xl font-bold text-green-700">
              {tile.currency} {tile.price}
            </p>

            <p className="mt-6 border-b border-slate-200 pb-6 text-slate-500">
              {tile.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3">
                <div className="text-xs font-semibold uppercase  text-slate-400">
                  Material
                </div>
                <div className="mt-1 font-semibold text-slate-800">
                  {tile.material}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Dimensions
                </div>
                <div className="mt-1 font-semibold text-slate-800">
                  {tile.dimensions}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Category
                </div>
                <div className="mt-1 font-semibold capitalize text-slate-800">
                  {tile.category}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Availability
                </div>
                <div
                  className={`mt-1 font-semibold ${tile.inStock ? "text-emerald-600" : "text-rose-500"}`}
                >
                  {tile.inStock ? "In stock" : "Out of stock"}
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4 border-t border-slate-200 pt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  disabled={!tile.inStock}
                  className="rounded-full bg-primary px-8 py-3.5 text-sm font-bold uppercase text-white shadow-md transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Add to cart
                </button>
                <button className="rounded-full border-2 border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary">
                  Request sample
                </button>
              </div>

              <p className="flex items-center gap-2 text-sm text-slate-500">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                Free shipping on orders over $200
              </p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default TileDetailPage;
