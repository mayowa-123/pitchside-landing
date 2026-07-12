function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-5 max-w-7xl mx-auto">

      <h1 className="text-3xl font-bold text-green-400">
        Pitchside
      </h1>

      <div className="hidden md:flex gap-8 text-gray-300">
        <a href="#">Features</a>
        <a href="#">AI</a>
        <a href="#">Stats</a>
        <a href="#">Roadmap</a>
      </div>

      <button className="bg-green-400 text-black px-5 py-2 rounded-full font-bold">
        Join Waitlist
      </button>

    </nav>
  );
}

export default Navbar;
