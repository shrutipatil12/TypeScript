"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var AddressBook_1 = require("../typescript/AddressBook");
describe('Address', function () {
    it('file should not be empty', function () {
        var result = new AddressBook_1.Address("shruti", 'patil', 12334, "maharashtra", "mumbai", 567890, 1234568797);
        chai_1.expect(result.readfile()).not.to.be.empty;
    });
});
