const checkFive = require('../checkFive.js');


describe("checkFive", function () {

    test("checks to see if inputs are less than 5", function () {
        expect(checkFive(4)).toBe('4 is less than 5.')
    });

    test("checks to see if inputs are more than 5", function () {
        input = checkFive(6);
        expect(input).toBe("6 is greater than 5.")
    });

    test("checks to see if inputs are equal to 5", function () {
        input = checkFive(5);
        expect(input).toBe("5 is equal to 5.")

    });
});

