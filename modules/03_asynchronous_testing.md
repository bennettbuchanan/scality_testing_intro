# Module 3: Mocha test framework

Module objective - 10 min:
* Write effective asynchronous tests.

Oops! The following test suite is failing:

```
node node_modules/mocha/bin/mocha tests/03_async_test.js
```

Output:

```
Asyncronous request
  ✓ should add 1 and 1 (575ms)
  1) should add 42 and 1295


1 passing (3s)
1 failing

1) Asyncronous request
     should add 42 and 1295:
   Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
```

Write a proper asynchronous test, so both of our tests pass.

Run the test again. The output should look something like:

```
Asyncronous request
  ✓ should add 1 and 1 (575ms)
  ✓ should add 42 and 1295

2 passing (5s)
```

| Previous | Next |
|:---------|-----:|
| [Module 2](./02_mocha_test_framework.md) | [Module 4](./04_test_driven_development.md) |