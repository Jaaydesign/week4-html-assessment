// problem 1
function deepEqual(objA, objB) {
  if (objA === objB) return true;

  if (
    typeof objA !== "object" || objA === null ||
    typeof objB !== "object" || objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, key)) return false;
    if (!deepEqual(objA[key], objB[key])) return false;
  }

  return true;
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 }));                     // false

// problem 2

function deepEqual(objA, objB) {
  if (objA === objB) return true;

  if (
    typeof objA !== "object" || objA === null ||
    typeof objB !== "object" || objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, key)) return false;
    if (!deepEqual(objA[key], objB[key])) return false;
  }

  return true;
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 }));                     // false

Paste it in as is and run it. The console should print true, false, false.

Help me solve this JavaScript problem please.🙏🏻

Write it in a code that I can paste directly inside my JavaScript file.

javascript
function diffObjects(oldObj, newObj) {
  const result = { added: {}, removed: {}, changed: {} };

  const allKeys = new Set([...Object.keys(oldObj), ...Object.keys(newObj)]);

  for (const key of allKeys) {
    const inOld = Object.prototype.hasOwnProperty.call(oldObj, key);
    const inNew = Object.prototype.hasOwnProperty.call(newObj, key);

    if (!inOld && inNew) {
      result.added[key] = newObj[key];
    } else if (inOld && !inNew) {
      result.removed[key] = oldObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = { from: oldObj[key], to: newObj[key] };
    }
  }

  return result;
}

console.log(
  diffObjects(
    { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
    { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
  )
);

// problem 3

function deepFreeze(obj) {
  Object.values(obj).forEach((value) => {
    if (typeof value === "object" && value !== null && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  });

  return Object.freeze(obj);
}

const config = deepFreeze({ api: { baseUrl: 'https://x.com', retries: 3 }, debug: false });
config.api.baseUrl = 'https://changed.com'; // should be ignored
config.debug = true;                        // should be ignored
console.log(config.api.baseUrl, config.debug); // "https://x.com" false
console.log(Object.isFrozen(config.api));      // true

// problem 4

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get value() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value);  // 1
console.log(counter.count);  // undefined - not directly accessible

// problem 5

function validateSchema(obj, schema) {
  const errors = [];

  for (const [key, expectedType] of Object.entries(schema)) {
    if (!Object.hasOwn(obj, key)) {
      errors.push(`${key}: missing property`);
    } else if (typeof obj[key] !== expectedType) {
      errors.push(`${key}: expected ${expectedType}, got ${typeof obj[key]}`);
    }
  }

  return errors;
}

const schema = { name: 'string', age: 'number', isAdmin: 'boolean' };
console.log(validateSchema({ name: 'Ada', age: 21, isAdmin: false }, schema));
// []
console.log(validateSchema({ name: 'Ada', age: '21' }, schema));
// ['age: expected number, got string', 'isAdmin: missing property']
