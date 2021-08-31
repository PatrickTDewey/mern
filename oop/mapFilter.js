const groceries = ['peal onions', 'cremini mushrooms','thyme'];
const groceryList = groceries.map(item => `<li>${item}</li>`);

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );

const values = [1, 2, 3, 4, 5];
const evens = numbers.filter( val => val % 2 === 0 );

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );

const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));