import { Person } from "./Module";

const person = new Person()
console.log(`%c${import.meta.url}`, 'color: blue; font-weight: bold;');
console.log(person.name);
console.log(person.age);

export {}