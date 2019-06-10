
import { expect } from 'chai';

import { Inventory } from '../Inventory';

describe('Inventory', () => {
    it("Customer choice should be in number", () => {
        var result = new Inventory("sugar", 30, 120, 3600);
        expect(result.customer()).to.be.a('number');
    });
    it("It should be in number", () => {
        var result = new Inventory("wheat", 50, 150, 2600);
        expect(result.purchase()).not.to.be.empty;
    });
});