//d.Print the total population of countries using reduce function
let Asiacountries=[
    
    {
    country: "china",
    population:24500000,
    },
    {
    country: "India",
    population:23500000,
    },
    {country: "Indonesia",
    population:180000,
},
    { country: "Pakistan",
    population:150000,
},
{country: "bangladesh",
population:95000,
},
];
let totalpop= Asiacountries.reduce(function( acc,curr)
{
    return acc+curr.population;
},0);
console.log(totalpop);