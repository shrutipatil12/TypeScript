"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var clinique_1 = require("../clinique");
describe('CliniqueReport', function () {
    it('file should not be empty', function () {
        var result = new clinique_1.CliniqueReport("shruti", 1011, 1222333144, 56, "Dr. Malhotra");
        chai_1.expect(result.readFile()).not.to.be.empty;
    });
    it('Doctor name should be in string format', function () {
        var result = new clinique_1.CliniqueReport("nilam", 1011, 1222333144, 56, "Dr. Kapoor");
        chai_1.expect(result.searchDoctor(result)).to.be.a('string');
    });
});
