import { Person, DEFAULT_CONFIG } from './Module';

const person = new Person();
person.name = 'Nataly';
console.log(`%c${import.meta.url}`, 'color: green; font-weight: bold;');
console.log(person.name);
console.log(person.age);
console.table(DEFAULT_CONFIG);

export {};
