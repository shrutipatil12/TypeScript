"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var DeckOfCards_1 = require("../DeckOfCards");
describe('DeckOfCards', function () {
    it("should return Array", function () {
        var result = new DeckOfCards_1.DeckOfCards();
        chai_1.expect(result.cards()).to.be.an('array');
    });
    it("should not return empty array", function () {
        var result = new DeckOfCards_1.DeckOfCards();
        chai_1.expect(result.shuffleCards()).not.to.be.empty;
    });
});
