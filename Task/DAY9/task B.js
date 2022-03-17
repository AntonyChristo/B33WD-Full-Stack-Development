//b.Get all the countries with a population of less than 2 lakhs using Filter function

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
let pop=Asiacountries.filter(function(value){
    return value.population < 200000;

})
console.log(pop);