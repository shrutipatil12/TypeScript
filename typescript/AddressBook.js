"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/***************************************************************************************************
 * Execution :  cmd >tsc AddressBook.ts
 * purpose   : User Interface for a Simple Address Book
 * @file     :  AddressBook.ts
 * @overview :  The software to be designed is a program that can be used to maintain an address book. An address book
                holds a collection of entries, each recording a person's first and last names, address, city, state, zip, and
                phone number.
 * @module   :  AddressBook.ts >This is a optional if expicitly its an npm or local package
 * @author   :  Shruti
 * @version  :  npm 6.9.0
 * @since    :  9/6/2019
 **********************************************************************************************************/
var read = require("readline-sync");
// Reg exp for validation of user inputs 
//var nameRestriction = /[a-z]/ig
var filestream = require('fs');
/**
 * @class: Address1
 * @description: define the class name as addressss and properties for details of person
 */
var Address1 = /** @class */ (function () {
    function Address1(firstname, lastname, idno, state, city, zip, phno) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.idno = idno;
        this.state = state;
        this.city = city;
        this.zip = zip;
        this.phno = phno;
    }
    return Address1;
}());
var obj = {
    adressArr: []
};
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @function: addPerson
     * @description: addperson methos is used to add new person to the address book
     */
    Address.prototype.addPerson = function () {
        try {
            var obj_1 = {
                adressArr: []
            };
            var firstname = read.question('enter the first name:');
            var lastname = read.question('enter the last name:');
            var idno = read.question('enter the idno:');
            console.log();
            console.log("Enter your residence details");
            var state = read.question('enter the state:');
            var city = read.question('enter the city name:');
            var zip = read.question('enter the zip code plz');
            var phno = read.question('enter the phone number:');
            var address = new Address(firstname, lastname, idno, state, city, zip, phno);
            //  console.log(address)
            var r = this.readfile();
            obj_1.adressArr.push(r);
            obj_1.adressArr.push(address);
            var data1 = JSON.stringify(obj_1);
            filestream.writeFileSync('/home/user/TypeScript/typescript/address.json', data1);
            if (obj_1) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (err) {
            console.log("error in catch block ");
            //this.addperson()
        }
    };
    /**
     * @function: deletee
     * @description: used to delete the particular person address from address book
     */
    Address.prototype.deletee = function () {
        try {
            var idn = read.question("enter the id number:");
            var addressjson = this.readfile();
            var f = 0;
            for (var key in addressjson) {
                if (addressjson[key].idno == idn)
                    var f = 1;
                var index = addressjson.indexOf(idn);
                addressjson.splice(index, 1);
                var data1 = JSON.stringify(addressjson);
                filestream.writeFileSync('/home/user/TypeScript/typescript/address.json', data1);
            }
            if (f == 0) {
                console.log("your id is not present");
                this.deletee();
                return false;
            }
            else {
                return true;
            }
        }
        catch (err) {
            console.log(err + " re enter the idno: ");
            //deletee()
        }
    };
    /**
     * @function: sort
     * @description:sorting the address book data based on person idno
     */
    Address.prototype.sort = function () {
        var f = 0;
        var addressjson = this.readfile();
        addressjson.sort(function (a, b) {
            return a.idno - b.idno;
        });
        var data1 = JSON.stringify(addressjson);
        filestream.writeFileSync('/home/user/TypeScript/typescript/address.json', data1);
        return true;
        //console.log("your file is sorted")
    };
    /**
     * @function:readfile
     * @description: readfile function is used for read the data from json file
     */
    Address.prototype.readfile = function () {
        var data = filestream.readFileSync('/home/user/TypeScript/typescript/address.json');
        var data1 = JSON.parse(data);
        console.log(data1);
        return data1;
    };
    //
    /***
     * @function: updateAddress
     * @description: update method is used to update the address of particular person in the address book
     */
    Address.prototype.updateAddress = function (idno) {
        try {
            var data = this.readfile();
            for (var index = 0; index < data.length; index++) {
                if (idno == data[index].idno) {
                    var value = read.question("1.change the state name \n 2. change the city name \n 3.change the zip code of city \n4.change the phone number ");
                    switch (value) {
                        case 1:
                            var res = updateState(index);
                            if (res == true) {
                                console.log("state updated successfully");
                            }
                            else {
                                console.log("not updated");
                            }
                            break;
                        case 2:
                            var res = updateCity(index);
                            if (res == true) {
                                console.log("state updated successfully");
                            }
                            else {
                                console.log("not updated");
                            }
                            break;
                        case 3:
                            var res = updateZip(index);
                            if (res == true) {
                                console.log("state updated successfully");
                            }
                            else {
                                console.log("not updated");
                            }
                            break;
                        case 4:
                            var res = updatePhone(index);
                            if (res == true) {
                                console.log("state updated successfully");
                            }
                            else {
                                console.log("not updated");
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        }
        catch (err) {
            console.log(" plz re enter the option");
        }
        //updateState function is used to update the state name of particular person 
        function updateState(index) {
            if (index) {
                var newstate = read.question('enter the new state name');
                data[index].state = newstate;
                var data1 = JSON.stringify(data);
                filestream.writeFileSync('/home/user/TypeScript/typescript/address.json', data1);
                return true;
            }
            else {
                return false;
            }
        }
        //updateCity function is used to update the city of perticular person
        function updateCity(index) {
            if (index) {
                var city = read.question('enter the new city name');
                data[index].state = city;
                var data1 = JSON.stringify(data);
                filestream.writeFileSync('/home/user/TypeScript/typescript/address.json', data1);
                return true;
            }
            else {
                return false;
            }
        }
        // updateZip function is used to update the zip code of the perticular person
        function updateZip(index) {
            if (index) {
                var Zip = parseInt(read.question('enter the new Zip code'));
                data[index].state = Zip;
                var data1 = JSON.stringify(data);
                filestream.writeFileSync('/home/user/TypeScript/typescript/address.json', data1);
                return true;
            }
            else {
                return false;
            }
        }
        //update function is used to update the phone number of perticular person
        function updatePhone(index) {
            if (index) {
                var Phone = parseInt(read.question('enter the new phone number'));
                data[index].state = Phone;
                var data1 = JSON.stringify(data);
                filestream.writeFileSync('/home/user/TypeScript/typescript/address.json', data1);
                return true;
            }
            else {
                return false;
            }
        }
    };
    return Address;
}(Address1));
exports.Address = Address;
var add = new Address("shruti", "patil", 2, "maharashtra", "mumbai", 1234, 1234567897);
var choice;
do {
    console.log("1.add address\n2.update address.\n3.delete address\n4.sort\n5.exit");
    choice = read.question('enter your choice:  ');
    if (choice < '0' && choice > '6') {
        console.log("invalid choice ");
        throw Error;
    }
    switch (choice) {
        case '1':
            var res = add.addPerson();
            if (res == true) {
                console.log("data Added successfully");
            }
            else {
                console.log("data is not added");
            }
            break;
        case '2':
            var idno = read.question("enter your id number:");
            add.updateAddress(idno);
            break;
        case '3':
            var res = add.deletee();
            if (res == true) {
                console.log("data deleted successfully");
            }
            else {
                console.log("data is not deleted");
            }
            break;
        case '4':
            var res = add.sort();
            if (res == true) {
                console.log("data is sorted successfully");
            }
            else {
                console.log("data is not sorted");
            }
            break;
        case '5':
            console.log("exit");
            process.exit();
            break;
    }
} while (choice < '6');
