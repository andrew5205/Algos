const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// for ( let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }



// forEach
companies.forEach( (company) => {
    console.log(company);
})


// // filter - will generte a new array 

// let canDrink = [];
// for ( let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

// ES5
// const canDrink1 = ages.filter( (age) => {
//     if(age >= 21) {
//         return true;
//         // return age;
//     }
// })
// console.log(canDrink1);


// ES6 does the same thing
const canDrink2 = ages.filter( age => age >= 21 );
console.log(canDrink2);



// // Filter retail companies 
// // ES5
// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         // return true;
//         return company.category;
//     }
// })
// console.log(retailCompanies);

// ES6
const retailCompanies2 = companies.filter( company => company.category === 'Retail');
console.log(retailCompanies2);




// ********************************************************************************** //
// map - will generte a new array 
// create array of company names 
const companyName = companies.map( company => company.name);
console.log(companyName);

const testMap = companies.map( company => {
    ` ${company.name} [ ${company.start} - ${company.end}]`
})
console.log(testMap);


const agesSquare = ages.map( age => Math.sqrt(age));
console.log(agesSquare);


const agesSquareAndTimesTwo = ages
.map( age => Math.sqrt(age))
.map( age => age * 2);
console.log(agesSquareAndTimesTwo);




// ********************************************************************************** //
// The callback function or, technically, comparison function receives two arguments 
// (called a and b by convention) 
// and should return 1 if the first argument should preceed the second, 
// -1 if the second argument should preceed the first 
// and 0 if they are equal

// function sortEggsInNest(a, b) {
//     if (a > b) {
//         return 1;
//     } else if (b > a) {
//         return -1;
//     } else {
//         return 0;
//     }
// }


// function sortEggsInNest(a, b) {
//     return a > b ? 1 : b > a ? -1 : 0;
// }

// ********************************************************************************** //
// sort
// return 1 or -1 or 0 
const sortCompanies = companies.sort(function(c1, c2) {
    if( c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});
console.log(sortCompanies);

const sortedCompanies = companies.sort( (a, b) => { a.start > b.start ? 1: -1});
console.log(sortedCompanies);

// sort ages 
const sortAges1 = ages.sort();
// shorter way with "Numbers"
const sortAges2 = ages.sort( (a, b) => a-b );
console.log(sortAges1); 
console.log(sortAges2); 


//// ********************************************************************************** //
console.log('******************  reduce  ******************')
// reduce - The reduce() method reduces the array to a single value.
// array.reduce( function(total, currentValue, currentIndex, arr), initialValue )

// let ageSum = 0; 
// for ( let i = 0; i < age.length; i++) {
//     ageSum += age[i];
// }

// const ageSum = age.reduce( function(total, age) {
//     return total + age;
// }, 0);


const ageSum = ages.reduce( (total, age) => total + age, 0);
console.log(ageSum);        // 460


// Get total years for all companies 
// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);

const totalYears = companies.reduce( (total, company) => 
    total + (company.end - company.start), 0);

console.log(totalYears);        // 118




//  Combine Methods 

const combined = ages.map(age => age * 2)
.filter(age => age>= 40)
.sort( (a,b) => a-b)
.reduce( (a,b) => a+b, 0);

console.log(combined);      // 798
