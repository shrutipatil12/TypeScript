import { expect } from 'chai';
import { Address } from "../typescript/AddressBook";
describe('Address',()=>{
    it('file should not be empty',()=>{
        var result=new Address("shruti", 'patil', 12334, "maharashtra", "mumbai", 567890,1234568797);
        expect(result.readfile()).not.to.be.empty;

    });
   
})