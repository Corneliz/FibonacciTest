describe("Fibonacci", function () {
    var Fibonacci = require('../index');
    var fibonacci;

    beforeEach(function () {
        fibonacci = new Fibonacci();
    });

    it("should be able to calculate a Fibonacci number", function () {
        fibonacci.calculate(8);
        expect(fibonacci.result).toEqual(21);
    });

    it("parameter must be a number", function () {
        fibonacci.calculate('my-test');
        expect(fibonacci.result).toEqual('parameter my-test is not a number');
    }); 

    it("should be able to converting a negative number and calculate a Fibonacci", function () {
        fibonacci.calculate(-6);
        expect(fibonacci.result).toEqual(8);
    });
});
