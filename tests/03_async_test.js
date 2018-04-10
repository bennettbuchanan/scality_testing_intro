/*
 * TODO: Write a test that sums two numbers asynchronously.
 */

const assert = require('assert');

/**
 * A mock asynchronous function that sums two given numbers.
 * @param  {Number}   n1 - The first number to sum.
 * @param  {Number}   n2 - THe second number to sum.
 * @param  {Function} cb - The function callback.
 * @return {cb} Callback with the error value and the data as parameters.
 */
function sum(n1, n2, cb) {
    const cbTime = Math.floor((Math.random() * 1000));
    const error = null
    const sum = n1 + n2;
    setTimeout(() => {
        cb(error, sum)
    }, cbTime);
};

describe('Asyncronous request', () => {
    it('should add 1 and 1', done => {
        return sum(1, 1, (err, response) => {
            if (err) {
                return done(err);
            }
            assert.strictEqual(response, 2, 'incorrect response');
            return done();
        });
    });

    it('should add 42 and 1295', done => {
        // TODO: Write an asynchronous test using the function `sum`.
        assert.strictEqual(42 + 1295, 1337);
    });
});