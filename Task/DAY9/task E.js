//e.Print the country which uses US Dollars as currency.
let Asiacountries=[
    
    {
    country: "china",
    currency: "yuan",
    },
    {
    country: "India",
    currency: "Rupees",
    },
    {country: " United states",
    currency: "USD",
},
    { country: "Ecuador",
    currency: "USD",
},
{country: "Panama",
currency: "USD",
},
];
let countries= Asiacountries.filter(function(value){
    return value.currency=="USD";
    })
console.log(countries);
