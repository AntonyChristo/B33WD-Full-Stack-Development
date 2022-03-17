//c.Print the following details name, capital, flag using forEach function

let countries=[
    {
        name:"India",
        capital:"Delhi",
        flag:"Tricolour",
    },
    {
        name:"China",
        capital:"Beijing",
        flag:"Five-star Red Flag",
    },
    {
        name:"United states",
        capital:"Washington",
        flag:"American Stars and Stripes",
    },
    {
        name:"pakistan",
        capital:"Islamabad",
        flag:"Parcam-i Sitārah o Hilāl",
    },
];

countries.forEach(data => {
    console.log(`
        ${data.name}
        ${data.capital}
        ${data.flag}
    `)
});
