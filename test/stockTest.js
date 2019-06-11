"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var Stock_1 = require("../typescript/Stock");
describe('Stock', function () {
    it("Shares should be in numbers", function () {
        var result = new Stock_1.Stock();
        chai_1.expect(result.calculateShares()).to.be.a('number');
    });
    it("Input should be in JSON format", function () {
        var result = new Stock_1.Stock();
        chai_1.expect(result.readInput()).not.to.be.empty;
    });
});
