const express = require('express');
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

function Fibonacci() {
}

Fibonacci.prototype.calculate = function (num) {
    let number = parseInt(num);
    if (number < 0) {
        number = (~number + 1);
    }
    if (!isNaN(number)) {
        let a = 0;
        let b = 1;
        let c = 0;
        if (number === 1) {
            return 1;
        }
        for (let i = 0; i < number - 1; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        this.result = c;
    } else {
        this.result = 'parameter ' + num + ' is not a number';
    }
    return this.result;
};

Fibonacci.prototype.pause = function () {
    this.iscalculateing = false;
};

module.exports = Fibonacci;

app.get('/calcular/:num', (req, res) => {
    fibonacci = new Fibonacci();
    let num = req.params.num;
    let result = fibonacci.calculate(num);
    res.json({ result: result });
})

app.listen(3000, () => {
    console.log("Running")
})

