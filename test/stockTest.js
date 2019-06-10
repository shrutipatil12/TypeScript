"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var Stock_1 = require("../Stock");
describe('Stock', function () {
    it("should return Array", function () {
        var result = new Stock_1.Stock();
        chai_1.expect(result.calculateShares()).to.be.a('number');
    });
    it("should not return empty array", function () {
        var result = new Stock_1.Stock();
        chai_1.expect(result.readInput()).not.to.be.empty;
    });
});
