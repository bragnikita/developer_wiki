---
categories:
  - javascript
  - testing
keywords: js, testing, jest, mocking  
---

#Jest mocks
https://facebook.github.io/jest/docs/en/mock-functions.html

```javascript
const mockCallback = jest.fn();

//return values
myMock
  .mockReturnValueOnce(10) //returns 10 on the first call
  .mockReturnValueOnce('x') //returns 'x' on the second call
  .mockReturnValue(true); //other calls will return true

//mock implementation
const myMockFn = jest
  .fn()
  .mockImplementationOnce(cb => cb(null, true))
  .mockImplementationOnce(cb => cb(null, false));

```
`mockFunction.mock.calls` - массив вызовов
`mockFunction.mock.instances` - массив инстансов функции (this, с которым вызывалась функция)
`call[0]` - первый аргумент вызова

###MOck matchers
```javascript
// The mock function was called at least once
expect(mockFunc).toBeCalled();
// The mock function was called at least once with the specified args
expect(mockFunc).toBeCalledWith(arg1, arg2);
// The last call to the mock function was called with the specified args
expect(mockFunc).lastCalledWith(arg1, arg2);
// All calls and the name of the mock is written as a snapshot
expect(mockFunc).toMatchSnapshot();
```

###Mocking modules
```javascript
import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('should fetch users', () => {
  const resp = {data: [{name: 'Bob'}]};
  axios.get.mockResolvedValue(resp);

  // or you could use the follwing depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(users => expect(users).toEqual(resp.data));
});


// test.js
jest.mock('../foo'); // this happens automatically with automocking
const foo = require('../foo');

// foo is a mock function
foo.mockImplementation(() => 42);
foo();
// > 42

```
