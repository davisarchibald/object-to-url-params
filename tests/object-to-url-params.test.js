import test from 'tape';
import { params } from '../src';

test('should return url parameter string when passing in an object literal', (assert) => {
  const data =  {
    test1: 1,
    test2: 2,
    test3: 33
  };
  const expectedString = 'test1=1&test2=2&test3=33';
  assert.equal(params(data), expectedString);
  assert.end();
});
test('should create a parameterized string with arrays as values', (assert) => {
  const data =  {
    test1: 1,
    test2: 2,
    test3: [33, 34]
  };
  const expectedString = 'test1=1&test2=2&test3=33&test3=34';
  assert.equal(params(data), expectedString);
  assert.end();
});
test('should not add undefined or null values in an object to the parameterized string', (assert) => {
  const data =  {
    test1: 1,
    test2: 2,
    test3: undefined,
    test4: null
  };
  const expectedString = 'test1=1&test2=2';
  assert.equal(params(data), expectedString);
  assert.end();
});
test('should not add empty string values in an object to the parameterized string', (assert) => {
  const data =  {
    test1: 1,
    test2: 2,
    test3: ''
  };
  const expectedString = 'test1=1&test2=2';
  assert.equal(params(data), expectedString);
  assert.end();
});
