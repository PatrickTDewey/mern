const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// let email = person.email
let firstAnimal = animals[0]

// const { email, password } = person;
// console.log(email, password);
// const [, , , , bird] = animals
// const [horse, dog, fish] = animals
// console.log(bird);
// console.log(horse);
// console.log(fish);
// const { password: hashedPassword } = person;
// console.log(hashedPassword);



const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const {addresses: [whitehouse, sherlock]} = person;
console.log(whitehouse, sherlock);