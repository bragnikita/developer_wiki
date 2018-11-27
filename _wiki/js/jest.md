---
categories:
  - js
  - javascript
  - testing
keywords: js, testing, jest  
---
# Links
[Cheatsheet](https://github.com/sapegin/jest-cheat-sheet/blob/master/Readme.md>)  
[Snapshot testing concept](https://blog.kentcdodds.com/effective-snapshot-testing-e0d1a2c28eca)  

# Running and confuguration

## CLI

interactive mode: `npm run test -- --watch` or `./mode_modules/.bin/jest --watch`  
coverage: `--coverage`

## Config

#### *in package.json*
```json
"jest": {
  "setupFiles": [
      "./app/javascript/testSetup.js"
    ],
    "moduleFileExtensions": [
      "js",
      "jsx"
    ],
    "moduleDirectories": [
      "node_modules"
    ],
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|scss)$": "identity-obj-proxy"
    },
    "testMatch": [
      "**/app/javascript/**/__tests__/**/*.js?(x)",
      "**/app/javascript/**/?(*.)+(spec|test).js?(x)"
    ]
}
```

### HTML Reporter
<https://github.com/Hargne/jest-html-reporter#readme>

# Code
```javascript
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```
### Основные матчеры
https://facebook.github.io/jest/docs/en/expect.html
```javascript
expect(n).toEqual();
expect(a + b).not.toBe(0);

expect(n).toBeNull();
expect(n).toBeDefined();
expect(n).not.toBeUndefined();
expect(n).not.toBeTruthy();
expect(n).toBeFalsy();

expect(value).toBeGreaterThan(3);
expect(value).toBeGreaterThanOrEqual(3.5);
expect(value).toBeLessThan(5);
expect(value).toBeLessThanOrEqual(4.5);
expect(value).toBeCloseTo(0.3)

expect('team').not.toMatch(/I/);
expect(shoppingList).toContain('beer');

expect(compileAndroidCode).toThrow();
expect(compileAndroidCode).toThrow(ConfigError);

// You can also use the exact error message or a regexp
expect(compileAndroidCode).toThrow('you are using the wrong JDK');
expect(compileAndroidCode).toThrow(/JDK/);

```

### матчеры для композиций с другими матчерами (статик-методы на expect)

```javascript

expect.anything()
expect.any(<функция-конструктор>) - проверка по типу (через равенство конструкторов)

expect.arrayContaining(array) - проверяет вхождение всех элементов array в полученный массив
expect.objectContaining(object) - проверяет вхождение подобъекта object в полученный объект

expect.assertions(number) - проверяет количество вызванных assert-нов в ходе теста (не считая самого себя)
expect.hasAssertions() - проверяет, что хотя бы один assert был вызван (годно для проверки Promice, что then/catch вообще вызывался)

expect.stringContaining(string)
expect.stringMatching(regexp)

```

#### Примеры
```
expect(onPress).toBeCalledWith(
    expect.objectContaining({
      x: expect.any(Number),
      y: expect.any(Number),
    }),
  );
```  

###Ascynchronous
```javascript
test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }

  fetchData(callback);
});
```
if the function under testing returns Promise, just make assertions in `then` callback and the Promise
```javascript
test('the data is peanut butter', () => {
  expect.assertions(1);
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData().catch(e => expect(e).toMatch('error'));
});
```

the other way
```javascript
test('the data is peanut butter', () => {
  expect.assertions(1);
  return expect(fetchData()).resolves.toBe('peanut butter');
});
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return expect(fetchData()).rejects.toMatch('error');
});

```

###Setup and Teardown
```javascript
//before test(or scope)

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});
//before file

beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});
```
You can use done() parameter or return a Promise to handle asynchronous code.

### Scopes
```javascript
describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test('Vienna <3 sausage', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });
});
```
