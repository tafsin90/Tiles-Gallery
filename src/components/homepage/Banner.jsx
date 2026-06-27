const Banner = () => {
  return (
    <div
      className="text-center min-h-[80vh] bg-slate-100
  bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)]
  bg-[size:60px_60px] flex flex-col justify-center items-center"
    >
      <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-7xl text-[#1A1A1A] font-semibold mb-2">
        Discover Your <br />
        <span className="font-cormorant italic text-[#D4A373] ">
          Perfect Aesthetic
        </span>
      </h1>
      <p className="font-cormorant text-lg">
        "An architectural anthology of premium handcrafted modular tile
        patterns,<br></br> custom terrazzo speckles, and classic honed Calacatta
        surfaces."
      </p>
      <div className="mt-6">
        <button className="btn btn-neutral mr-4 px-10 py-5">Browse Now</button>
        <button className="btn btn-neutral btn-outline px-10 py-5">
          Explore Collection
        </button>
      </div>
    </div>
  );
};

export default Banner;
