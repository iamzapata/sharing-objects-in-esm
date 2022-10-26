if (console.clear) console.clear();

console.log(`%c${import.meta.url}`, 'color: red; font-weight: bold;');
console.log();

function deepFreeze(obj: any) {
  const keys = Object.getOwnPropertyNames(obj);

  for (const name of keys) {
    const value = obj[name];

    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);
}

const DEFAULT_CONFIG = {
  A: {
    name: '10X0',
    age: 10,
  },
  B: {
    name: '20X0',
    age: 20,
  },
};

deepFreeze(DEFAULT_CONFIG);

export class Person {
  name: string;
  age: number;

  constructor() {
    this.name = 'Andres';
    this.age = 33;
  }
}

export { DEFAULT_CONFIG };
