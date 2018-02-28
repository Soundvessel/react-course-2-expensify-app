// Obj

//
// const person = {
//     name: 'G',
//     age: 36,
//     location: {
//         city: 'Phoenix',
//         temp: 60
//     }
// };
//
// const { name: firstName = 'Anon', age } = person;
//
// console.log(`${firstName} is ${age}.`);
//
// const {city, temp: temperature} = person.location;
//
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Lotr',
//     author: 'Tolken',
//     publisher: {
//         name: 'The Ring'
//     }
// };
//
// const {name: publisherName = 'Self Published'} = book.publisher;
//
// console.log(publisherName);

// Array

// const address = ['5841 S 14th Way', 'Phoenix', 'Arizona', '85040'];
//
// const [, city, state = 'Maine'] = address;
//
// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee', '$2.00', '$2.50', '$2.75' ];

const [name , , medPrice] = item;

console.log(`A medium ${name} costs ${medPrice}.`);