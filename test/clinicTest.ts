import { expect } from 'chai';
import { CliniqueReport } from "../clinique";
describe('CliniqueReport',()=>{
    it('file should not be empty',()=>{
        var result=new CliniqueReport("shruti", 1011, 1222333144, 56, "Dr. Malhotra");
        expect(result.readFile()).not.to.be.empty;

    });
    it('Doctor name should be in string format',()=>{
        var result=new CliniqueReport("nilam", 111, 1235467895, 56, "Dr. Kapoor");
        expect(result.searchDoctor(result)).to.be.a('string');
    })
})