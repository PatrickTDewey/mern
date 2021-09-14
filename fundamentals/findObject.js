const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};
function findObjects(criteria, collection) {
    debugger
    for (const key in criteria) {
        for (let index = 0; index < array.length; index++) {
            if (key in collection[index]) {
                if
            }
            
        }
    }
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            
        }
    }
}
findObjects(searchCriteria1, items)