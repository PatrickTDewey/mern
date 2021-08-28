// var foo = "bar";
// function magic(){
//     foo = "hello world";
//     console.log(foo);
//     var foo;
// }
// magic();
// console.log(foo);

// const jeebs;
// console.log(jeebs);
// syntax error

// GIVEN
// console.log(example);
// var example = "I'm the example!"
// READ by interpreter
// var example;
// console.log(example);
// example = "I'm the example"

// console.log(example);
// let example = "I'm the example!";  
// ReferenceError

// console.log(hello);                                   
// var hello = 'world';    

// var hello;
// console.log(hello)
// hello = 'world';
// var needle;
// needle = 'haystack';
// test(); 
// function test(){
//     var needle = 'magnet'; // var already declared
//     console.log(needle);
// }

// console.log(addNum(2,3));
// function addNum(a,b) {
//     return a + b;
// }

// console.log(add(2,3));
// let add = (a,b) => a + b;
// var brendan;
// brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan); 
// super cool
// var food;
// food = 'chicken'
// console.log(food); 
// eat();
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// Output
// chicken
// half-chicken

// mean();
// console.log(food);
// var mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);
// TypeError
// var genre;
// console.log(genre); // undefined
// genre = "disco";
// rewind();
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// undefined
// rock
// r&b
// disco
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// san jose 
// seattle
// burbank
// sanjose

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

// Output
// cant reassign dojo