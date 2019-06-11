"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var Inventory_1 = require("../typescript/Inventory");
describe('Inventory', function () {
    it("Customer choice should be in number", function () {
        var result = new Inventory_1.Inventory("sugar", 30, 120, 3600);
        chai_1.expect(result.customer()).to.be.a('number');
    });
    it("It should be in number", function () {
        var result = new Inventory_1.Inventory("wheat", 50, 150, 2600);
        chai_1.expect(result.purchase()).not.to.be.empty;
    });
});
