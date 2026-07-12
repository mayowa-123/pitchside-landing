const features=[
{
title:"AI Football Intelligence",
text:"Get smart football insights, analysis and answers about teams and players."
},
{
title:"Player Statistics",
text:"Explore player performance, records and football data."
},
{
title:"Live Match Center",
text:"Follow scores, events and match updates."
},
{
title:"Football Community",
text:"Connect with fans and share your passion."
},
{
title:"Highlights",
text:"Discover important moments from matches."
},
{
title:"Club Spaces",
text:"Join communities built around your favourite teams."
}
];


function Features(){

return(

<section className="px-6 py-20">

<h2 className="text-4xl font-bold text-center mb-12">
Everything Football Fans Need
</h2>


<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

{
features.map((item,index)=>(

<div key={index}
className="bg-white/5 border border-gray-800 p-6 rounded-2xl">

<h3 className="text-xl font-bold text-green-400">
{item.title}
</h3>

<p className="mt-3 text-gray-400">
{item.text}
</p>

</div>

))
}

</div>

</section>

)

}

export default Features;
