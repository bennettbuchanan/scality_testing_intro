/*
 * TODO: Fill in the `beforeEach` hook so that the tests pass.
 *
 * A `before`, `after`, `beforeEach`, and `afterEach` hooks serve as setups and
 * break-downs of the `it` statements.
 */

const assert = require('assert');

describe('Mathematical operations', () => {
    let sum;
    let difference;
    let product;

    // Runs once before all `it` statements.
    before(() => {
        sum = 1 + 1;
        difference = 1 - 1;
        product = 1 * 1
    });

    beforeEach(() => {
        // TODO: Fill in the before hook.
    });

    // Runs after each `it` statement.
    afterEach(() => {
        sum = 0;
        difference = 0;
        product = 0;
    });

    it('should add two numbers', () => {
        assert.strictEqual(sum, 42, 'addition was unsuccessful');
    });

    it('should subtract two numbers', () => {
        assert.strictEqual(difference, 42, 'subtraction was unsuccessful');
    });

    it('should multiply two numbers', () => {
        assert.strictEqual(product, 42, 'multiplication was unsuccessful');
    });
});