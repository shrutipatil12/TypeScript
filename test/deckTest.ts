
import { expect } from 'chai';

import { DeckOfCards } from '../DeckOfCards';

describe('DeckOfCards', () => {
    it("should return Array", () => {
        var result = new DeckOfCards();
        expect(result.cards()).to.be.an('array');
    });
    it("should not return empty array", () => {
        var result = new DeckOfCards();
        expect(result.shuffleCards()).not.to.be.empty;
    });
});