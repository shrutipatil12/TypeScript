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
 *
 *
 * @description
 * @file     :  AddressBook.ts
 * @overview :  The software to be designed is a program that can be used to maintain an address book. An address book
                holds a collection of entries, each recording a person's first and last names, address, city, state, zip, and
                phone number.
 *
 * @module   :  AddressBook.ts >This is a optional if expicitly its an npm or local package
 * @author   :  Shruti
 * @version  :  npm 6.9.0
 * @since    :  5/6/2019
 *
 **********************************************************************************************************/
var readline = require('readline-sync');
var fs = require('fs');
var Address = /** @class */ (function () {
    function Address(firstname, lastname, idno, address) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.idno = idno;
        this.address = address;
    }
    return Address;
}());
var Address2 = /** @class */ (function () {
    function Address2(state, city, zip, phno) {
        this.state = state;
        this.city = city;
        this.zip = zip;
        this.pincode = phno;
    }
    return Address2;
}());
var AddressBook = /** @class */ (function (_super) {
    __extends(AddressBook, _super);
    function AddressBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddressBook.prototype.addperson = function () {
        try {
            var firstname = readline.question('enter the first name');
            var lastname = readline.question('enter the last name');
            var idno = readline.question('enter the id no');
            console.log();
            console.log("residence details");
            var state = readline.question('enter the state');
            var city = readline.question('enter the city name');
            var zip = readline.question('enter the zip code');
            var phno = readline.question('enter the phone number');
            var address3 = new Address2(state, city, zip, phno);
            this.adressArr.push(address3);
            var address4 = new Address(firstname, lastname, idno, this.adressArr);
            var read = this.readfile();
            read.push(address4);
            this.writefile(read);
        }
        catch (err) {
            console.log(err);
        }
    };
    AddressBook.prototype.ask = function (idnoo) {
        try {
            var choice = readline.question("enter 1 for changing the address..\n..2 for no");
            if (choice < 0 || choice > 2)
                throw " plz enter 1 or 2";
            if (choice == 1) {
                console.log("residence details");
                var state = readline.question('enter the state');
                var city = readline.question('enter the city name');
                var zip = readline.question('enter the zip code plz');
                var phno = readline.question('enter the phone number');
                var address34 = new address34(state, city, zip, phno);
                var addressjson = this.readfile();
                for (var key in addressjson) {
                    if (addressjson[key].idno == idnoo)
                        addressjson[key].address = address34;
                }
                this.writefile(addressjson);
            }
        }
        catch (err) {
            console.log(err);
            this.ask(idnoo);
        }
    };
    AddressBook.prototype["delete"] = function () {
        try {
            var idn = readline.question("enter the id number");
            var addressjson = this.readfile();
            var f = 0;
            for (var key in addressjson) {
                if (addressjson[key].idno == idn)
                    var f = 1;
                var index = addressjson.indexOf(idn);
                addressjson.splice(index, 1);
                this.writefile(addressjson);
            }
            if (f == 0) {
                console.log("your id is not present");
                this["delete"]();
                return false;
            }
            else {
                return true;
            }
        }
        catch (err) {
            console.log(err);
            this["delete"]();
        }
    };
    AddressBook.prototype.sort = function () {
        var addressjson = this.readfile();
        addressjson.sort(function (a, b) {
            return a.idno - b.idno;
        });
        this.writefile(addressjson);
        console.log("your file is sorted");
    };
    AddressBook.prototype.readfile = function () {
        var data = fs.readFileSync('../TypeScript/address.json');
        var data1 = JSON.parse(data);
        console.log(data1);
        return data1;
    };
    AddressBook.prototype.writefile = function (data) {
        var data1 = JSON.stringify(data);
        fs.writeFileSync('../TypeScript/address.json', data1);
    };
    return AddressBook;
}(Address2));
do {
    console.log("**********************WELCOME******************************\n");
    console.log('1.Search for Doctor\n 2.Search for Patient \n3.Take Appointment\n4.Exit');
    var ch = readline.question('\nEnter your choice: '); // reading user input.
    switch (ch) {
        case 1:
            var dr = readline.question('\nWhich person details you want to add?'); // reading user input.
            var search = ad.addperson(); //calling function from class using class object.
            if (search) {
                console.log('\n' + search + ' is available');
            }
            else {
                console.log(search + ' Doctor is not available');
            }
            break;
        case 2:
            var pt = readline.question('which patient you want to search?'); // reading user input.
            var delrecord = ad["delete"](); //calling function from class using class object.
            if (delrecord) {
                console.log(delrecord + ' record deleted');
            }
            else {
                console.log('not deleted');
            }
            break;
        case 3:
            var count = 0;
            var ap = readline.question('Whose details you want?'); // reading user input.
            var res = ad.ask(ap); //calling function from class using class object.
            if (res == true) {
                console.log('person details');
                count++;
            }
            else {
                console.log("Thank you!!");
            }
            if (count > 5) {
                console.log('details' + ap);
            }
            break;
        case 4:
            var ap = readline.question('Whose details you want?'); // reading user input.
            var res = ad.sort(); //calling function from class using class object.
            // if (res == true) {
            //     console.log('person details')
            //     count++;
            // }
            // else {
            //     console.log("Thank you!!")
            // }
            // if (count > 5) {
            //     console.log('details' + ap)
            // }
            if (res == true) {
                console.log("sorting ", res);
            }
            else {
                console.log("not sorted", ap);
            }
            break;
        case 5: process.exit();
    }
} while (ch < 5);
