
import { expect } from 'chai';

import { StockInventory } from '../typescript/StockInventory';

describe('StockInventory', () => {
    it("stock should be in string", () => {
        var result = new StockInventory("abcd", 200, 4000, 800000);
        expect(result.addStock()).to.be.a('string');
    });
    it("file content should be in JSON format", () => {
        var result = new StockInventory("pqr", 500, 6000, 900000);
        expect(result.viewFile()).not.to.be.empty;
    });
});