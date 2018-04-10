# Module 1: Mocha test framework

Module objective - 5 min:
* Write effective `describe` and `it` statements.

Oops! The following test suite gives no information about what it's testing:

```
node node_modules/mocha/bin/mocha tests/01_mocha_test_framework.js
```

Output:

```
✓


✓


✓


3 passing (8ms)
```

Fill in the `describe` and `it` statements so we understand what the mocha tests
are accomplishing. Check the `TODO` at the top of the file
`tests/01_mocha_test_framework.js`!

Run the test again. The output should look something like:

```
Addition operation
  ✓ should add two numbers together

...

3 passing (9ms)
```

| Previous | Next |
|:---------|-----:|
| [README](../README.md) | [Module 2](./02_mocha_test_framework.md) |