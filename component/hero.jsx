function Hero() {
 return (
<section className="px-6 py-24 text-center">

<div className="max-w-5xl mx-auto">

<h1 className="text-5xl md:text-7xl font-bold">
The Football Social App
<br/>
<span className="text-green-400">
For Real Fans
</span>
</h1>


<p className="mt-6 text-gray-400 text-lg">
Pitchside combines football communities,
AI-powered insights, player statistics,
live scores and highlights in one platform.
</p>


<div className="mt-10 flex justify-center gap-5">

<button className="bg-green-400 text-black px-8 py-3 rounded-full font-bold">
Join Waitlist
</button>


<button className="border border-gray-700 px-8 py-3 rounded-full">
Explore Pitchside
</button>

</div>

<div className="mt-16 mx-auto w-72 h-[500px] rounded-3xl bg-gradient-to-b from-green-900 to-black border border-gray-800 shadow-xl flex items-center justify-center">

<p className="text-gray-500">
Pitchside App Preview
</p>

</div>


</div>

</section>
 )
}

export default Hero;
