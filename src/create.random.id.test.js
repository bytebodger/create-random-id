import { createRandomId } from './create.random.id';

test('with no parameters, it generates a 32-character ID, starting with a letter, and consisting of uppercase letters, lowercase letters, and numbers', () => {
   const id = createRandomId();
   expect(id.length).toEqual(32);
   expect(!!id[0].match(/[0-9]/)).toEqual(false);
   expect(!!id.match(/[A-Z]/)).toEqual(true);
   expect(!!id.match(/[a-z]/)).toEqual(true);
   expect(!!id.match(/[0-9]/)).toEqual(true);
});

test('createRandomId(100), it generates a 100-character ID, starting with a letter, and consisting of uppercase letters, lowercase letters, and numbers', () => {
   const id = createRandomId(100);
   expect(id.length).toEqual(100);
   expect(!!id[0].match(/[0-9]/)).toEqual(false);
   expect(!!id.match(/[A-Z]/)).toEqual(true);
   expect(!!id.match(/[a-z]/)).toEqual(true);
   expect(!!id.match(/[0-9]/)).toEqual(true);
});

test('createRandomId(32, false), it generates a 32-character ID, starting with a letter, and consisting of lowercase letters and numbers', () => {
   const id = createRandomId(32, false);
   expect(id.length).toEqual(32);
   expect(!!id[0].match(/[0-9]/)).toEqual(false);
   expect(!!id.match(/[A-Z]/)).toEqual(false);
   expect(!!id.match(/[a-z]/)).toEqual(true);
   expect(!!id.match(/[0-9]/)).toEqual(true);
});

test('createRandomId(32, false, false), it generates a 32-character ID consisting entirely of numbers', () => {
   const id = createRandomId(32, false, false);
   expect(id.length).toEqual(32);
   expect(!!id[0].match(/[0-9]/)).toEqual(true);
   expect(!!id.match(/[A-Z]/)).toEqual(false);
   expect(!!id.match(/[a-z]/)).toEqual(false);
   expect(!!id.match(/[0-9]/)).toEqual(true);
});

test('createRandomId(32, false, false, false), it generates a 32-character ID, starting with a letter, and consisting of uppercase letters, lowercase letters, and numbers', () => {
   const id = createRandomId(32, false, false, false);
   expect(id.length).toEqual(32);
   expect(!!id[0].match(/[0-9]/)).toEqual(false);
   expect(!!id.match(/[A-Z]/)).toEqual(true);
   expect(!!id.match(/[a-z]/)).toEqual(true);
   expect(!!id.match(/[0-9]/)).toEqual(true);
});

test('createRandomId(32, true, false), it generates a 32-character ID, starting with a letter, and consisting of uppercase letters and numbers', () => {
   const id = createRandomId(32, true, false);
   expect(id.length).toEqual(32);
   expect(!!id[0].match(/[0-9]/)).toEqual(false);
   expect(!!id.match(/[A-Z]/)).toEqual(true);
   expect(!!id.match(/[a-z]/)).toEqual(false);
   expect(!!id.match(/[0-9]/)).toEqual(true);
});

test('createRandomId(32, true, true, false), it generates a 32-character ID, starting with a letter, and consisting of uppercase and lowercase letters', () => {
   const id = createRandomId(32, true, true, false);
   expect(id.length).toEqual(32);
   expect(!!id[0].match(/[0-9]/)).toEqual(false);
   expect(!!id.match(/[A-Z]/)).toEqual(true);
   expect(!!id.match(/[a-z]/)).toEqual(true);
   expect(!!id.match(/[0-9]/)).toEqual(false);
});

test('createRandomId(100_000, true, true, false), uses all ten numeric digits at least once', () => {
   const stats = {};
   const id = createRandomId(100_000, false, false, true);
   for (let i = 0; i < id.length; i++) {
      const ch = id.charAt(i);
      stats[ch] = (stats[ch] || 0) + 1;
   }
   expect(Object.keys(stats)).toHaveLength(10);
});