
import { expect } from 'chai';

import { Stock } from '../typescript/Stock'

describe('Stock', () => {
    it("Shares should be in numbers", () => {
        var result = new Stock();
        expect(result.calculateShares()).to.be.a('number');
    });
    it("Input should be in JSON format", () => {
        var result = new Stock();
        expect(result.readInput()).not.to.be.empty;
    });
});