

const Navbar = () => {
  return (
    <div className="font-cormorant bg-white text-black flex justify-between items-center px-25 py-6 border-b border-gray-200">
      <h1 className="font-bold text-3xl">Tiles Gallery</h1>
      <ul className="flex justify-between gap-8 font-semibold text-lg">
        <li className="hover:cursor-pointer hover:opacity-60">Home</li>
        <li className="hover:cursor-pointer hover:opacity-60">All Tiles</li>
        <li className="hover:cursor-pointer hover:opacity-60">My Profile</li>
      </ul>
      <button className="hover:cursor-pointer">Login</button>
    </div>
  );
}

export default Navbar