
//1: Solving problems using array functions on rest countries data.
 //a.Get all the countries from Asia continent /region using Filter function

let Asiacountries=[
    
    {
    country: "china",
    region:"Eastern Asia",
    },
    {
    country: "India", 
    region:"SouthernAsia",
    },
    {country: "Indonesia",
    region:"South-Eastern Asia",
},
    { country: "Pakistan",
    region:"SouthernAsia",
},
{country: "bangladesh",
region:"SouthernAsia",
},
];
let countries= Asiacountries.filter(function(value){
return value.region=="SouthernAsia";
});

console.log(countries);