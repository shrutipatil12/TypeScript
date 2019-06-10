"use strict";
/*****************************************************************************************************
Execution   : cmd>tsc Inventory.ts
purpose     : Take an inpunt in JSON file and calculate the total price and weight
 
@description
@file       : Inventory.ts
@overview   : Take input from json file and calculate the price for each share object

@module     : Inventory >this is optional if explicitly its an npm or local package
@author     : Shruti
@Version    : 1.0
@since      : 4/6/2019
*******************************************************************************************************/
exports.__esModule = true;
var readlineSync = require("readline-sync");
var filestream = require('fs');
var Inventory = /** @class */ (function () {
    function Inventory(pname, weight, price, totalprice) {
        this.pname = pname;
        this.weight = weight;
        this.price = price;
        this.totalprice = totalprice;
    }
    /**
     * @function: customer
     * @description:  used to get the customer choice
     * @param: choice
     */
    Inventory.prototype.customer = function () {
        try {
            console.log("1.purchase \n 2.Exit");
            var choice = readlineSync.question('Enter your choice: '); //reading user input
            if (choice < 1 || choice > 2) {
                console.log('please enter correct choice');
            }
            else {
                switch (choice) {
                    case '1':
                        this.purchase(); //calling function
                        break;
                    case '2': this.exit(); //calling function   
                }
            }
            return choice; //returning users choice
        }
        catch (err) {
            console.log(err);
            this.customer();
        }
    };
    /**
     * @function: purchase
     * @description: used for purchasing product
     * @param: pricekg, price, totalprice, arr
     */
    Inventory.prototype.purchase = function () {
        try {
            var pricekg = [100, 120, 80];
            var price = 0;
            var totalprice = 0;
            console.log('What do you want to purchase');
            var ch = readlineSync.question('1.Sugar\n2.Rice\n3.Wheat'); //reading user input
            var arr = ['sugar', 'rice', 'wheat'];
            var kg = readlineSync.question('How many kg you want: '); //reading user input
            console.log();
            console.log(arr[ch - 1] + " per kg is for Rs " + pricekg[ch - 1] + "....."); // displaying selected item with price per kg
            price = (pricekg[ch - 1] * kg);
            console.log(kg + " kg " + arr[ch - 1] + " is for Rs " + price + "....."); // displaying selected item with weight and total price
            var price1 = price;
            totalprice = totalprice + price1;
            var obj = {
                purchased: []
            };
            var data = new Inventory(arr[ch - 1], Number(kg), price, totalprice); //passing data to constructor for storing into json file
            //console.log(data)
            //return data;
            var file = filestream.readFileSync('/home/user/TypeScript/newInventory.json'); //reading data from json file
            var file1 = JSON.parse(file); //parsing json data to convert from object to string
            obj.purchased.push(data); // adding new data into appointment object.
            obj.purchased.push(file1);
            var jsn = JSON.stringify(obj); // converting string data into object to store into json file.
            filestream.writeFileSync('/home/user/TypeScript/newInventory.json', jsn); // writing data into json file.
            this.customer();
        }
        catch (err) {
            console.log(err);
            this.purchase();
        }
    };
    /**
     * @function: viewFile
     * @description: used for displaying file contents
     * @param: data, data1
     */
    Inventory.prototype.viewFile = function () {
        try {
            var data = filestream.readFileSync('/home/user/TypeScript/inventory.json'); // read data from json file
            var data1 = JSON.parse(data); //parsing data from object into string
            return data1; //returning data
        }
        catch (err) {
            console.log("error in readFile function", err);
        }
    };
    /**
    * @function: exit
    * @description: exit from the inventory
    */
    Inventory.prototype.exit = function () {
        console.log('***********thank you***********');
        process.exit();
    };
    return Inventory;
}());
exports.Inventory = Inventory;
var inventory = new Inventory("sugar", 30, 120, 3600);
var file = inventory.viewFile();
var file1 = JSON.stringify(file);
console.log("json file data: ", file1);
var res = inventory.customer();
console.log('Choice: ' + res);
