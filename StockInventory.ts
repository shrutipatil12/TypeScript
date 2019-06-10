/***************************************************************************************************** 
Execution   : cmd>node StockInventory.ts
purpose     : take the user input for stock management

@description
@file       : StockInventory.ts
@overview   : write the ipute into json file with the stock name, share name, number of shares and price of shares

@module     : StockInventory >this is optional if explicitly its an npm or local package
@author     : Shruti
@Version    : 1.0
@since      : 4/6/2019
******************************************************************************************************/

import readlineSync = require('readline-sync')
var filestream = require('fs');

/**
 * @class: StockInventory
 * @param   : shareName used to take share name from user
 * @param   : numberOfShares used to take number of shares from user
 * @param   : priceOfShare used to take price from user
 */
export class StockInventory {
    shareName: string;
    numberOfShares: number;
    priceOfShares: number;
    totalPrice: number;

    constructor(shareName: string, numberOfShares: number, priceOfShares: number, totalPrice: number) {
        this.shareName = shareName
        this.numberOfShares = numberOfShares
        this.priceOfShares = priceOfShares
        this.totalPrice = totalPrice
        // this.stock = []
    }
    /**
     * @function : addStock 
     * @description: used for adding stock into the json files
     * @param: no, shareName, numberOfShares, priceOfShares
     */
    public addStock(): string {
        try {
            var no: number = readlineSync.question('Enter the number of stocks: ') //reading user input
            for (var i = 0; i < no; i++) {

                var shareName: string = readlineSync.question('Enter share name: ') //reading user input

                var numberOfShares: number = readlineSync.question('enter no of share')//reading user input

                var priceOfShares: number = readlineSync.question('Enter price for shares: ')//reading user input

                var total = Number(numberOfShares * priceOfShares)

                var stock1 = new StockInventory(shareName, numberOfShares, priceOfShares, total) // calling constructor of class and passing arguments
                var stock2 = this.viewFile()         // calling function

                var obj = {
                    stock: []                   // created object for json file to store data in  it
                };
                obj.stock.push(stock1);   //adding data into onject
                obj.stock.push(stock2);   //adding data into object

                var jsn = JSON.stringify(obj) // conevrting object data into string
                filestream.writeFileSync('/home/user/TypeScript/StockInvetory.json', jsn)//writing output into file

                return jsn;
            }
        }

        catch (err) {
            console.log(err)
        }
    }
    /**
     * @function : viewFile 
     * @description: used to read the json file and display output
     * @param: data, data1
     */
    public viewFile(): string {
        var data = filestream.readFileSync('/home/user/TypeScript/StockInvetory.json') // reading json file
        var data1 = JSON.parse(data) //converting json object into string
        // console.log(data1) 
        return data1;            // returning data

    }
}

var stk = new StockInventory("abcd", 200, 4000, 800000); // created object of class

var stock = stk.addStock()               //calling function using object of class
var stock1 = JSON.stringify(stock)         //conerting data from object into object
console.log("Stock data: ", stock1)


