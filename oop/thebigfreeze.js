/* eslint-disable no-unused-vars */
const { log } = require("console");

const arr = [1, 2, 3, 4];
arr.push(300);

const arr1 = Object.freeze([1, 2, 3, 4]);



const groceryList = Object.freeze([
  { "item": "carrots", "haveIngredient": false },
  { "item": "onions", "haveIngredient": true },
  { "item": "celery", "haveIngredient": false },
  { "item": "cremini mushrooms", "haveIngredient": false },
  { "item": "butter", "haveIngredient": true }
]);

const needThyme = [...groceryList, { "item": "thyme", "haveIngredient": false }]
const conCatted = groceryList.concat([{ 'item': "thyme", "haveIngredient": false }])
console.log(conCatted);

const gotTheThyme = [...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true }]
console.log(gotTheThyme);

const dontNeedCelery = [...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3)]
console.log(dontNeedCelery);

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"])
const sortedItems = [...items].sort();
console.log(sortedItems);

const numbers = [10, 5, 3, 12, 22, 8];
console.log(numbers.sort((a, b) => a - b));
// sort has compare function parameter built in
// a == b return 0 change nothing
// > 0 return b
// < 0 return a
