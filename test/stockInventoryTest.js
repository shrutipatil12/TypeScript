"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var StockInventory_1 = require("../typescript/StockInventory");
describe('StockInventory', function () {
    it("stock should be in string", function () {
        var result = new StockInventory_1.StockInventory("abcd", 200, 4000, 800000);
        chai_1.expect(result.addStock()).to.be.a('string');
    });
    it("file content should be in JSON format", function () {
        var result = new StockInventory_1.StockInventory("pqr", 500, 6000, 900000);
        chai_1.expect(result.viewFile()).not.to.be.empty;
    });
});
