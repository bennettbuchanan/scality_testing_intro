# Module 2: Mocha test framework

Module objective - 10 min:
* Write effective `before`, `after`, `beforeEach`, `afterEach` hooks.

Oops! The following test suite is failing:

```
node node_modules/mocha/bin/mocha tests/02_mocha_test_framework.js
```

Output:

```
Mathematical operations
  1) should add two numbers
  2) should subtract two numbers
  3) should multiply two numbers


0 passing (14ms)
3 failing

1) Mathematical operations
     should add two numbers:

    AssertionError: addition was unsuccessful
    + expected - actual

    -2
    +42

    at Context.it (tests/02_mocha_test_framework.js:34:16)

...
```

Fill in the `beforeEach` hook such that the operations all equal `42`.

Run the test again. The output should look something like:

```
Mathematical operations
  ✓ should add two numbers
  ✓ should subtract two numbers
  ✓ should multiply two numbers

3 passing (8ms)
```

| Previous | Next |
|:---------|-----:|
| [Module 1](./01_mocha_test_framework.md) | [Module 3](./03_asynchronous_testing.md) |