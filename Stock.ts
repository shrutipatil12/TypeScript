/***************************************************************************************************** 
Execution   : cmd>node Stock.js
purpose     : Take an inpunt in JSON file and calculate the total shares and total share price
 
@description
@file       : Stock.js
@overview   : Take input from json file and calculate the price for each share object and total shares available for each object

@module     : Stock >this is optional if explicitly its an npm or local package
@author     : Shruti
@Version    : 1.0
@since      : 9/5/2019
*******************************************************************************************************/
const filestream = require('fs')

/**
 * @class: Stock
 */
export class Stock {
    /**
     * @param : stockName is the name of share holder
     * @param : shareNum is the number shares 
     * @param : price is the price of shares
     */

    shareName: string;
    shareNum: number;
    price: number;
    /**
     * @function: readInput
     * @description: read json file and convert json object into string
     */
    public readInput() {
        let data = filestream.readFileSync('/home/user/TypeScript/stock.json') // reading json file
        let data1 = JSON.parse(data)       //parsing data to convert json object into string
        return data1
    }

    /**
     * @function: calculateShares
     * @description: calculate price of shares stored in json file
     */
    public calculateShares(): number {
        try {
            //let stock = new Stock
            var array = this.readInput()  //reading json file
            var gtotal = 0
            for (var i = 0; i < array.Stock.length; i++) {
                var temp1 = array.Stock[i].noOfShares
                var temp2 = array.Stock[i].priceOfshares
                var total = Number(temp1 * temp2)   //calculating total shares price
                console.log('Total for ' + array.Stock[i].nameOfStock + ' shares: ' + total)
                gtotal = gtotal + total;
            }
            return gtotal; // returning grand total of all shares
        }
        catch (err) {
            console.log(err)
        }

    }

}

var stock = new Stock();

var data = stock.readInput(); //calling function of class using object of class
var data1 = JSON.stringify(data);//converting object data into string of json file
console.log(data1);

var result = stock.calculateShares(); // calling function of class using object of class
console.log("grand total of all shares: ", result);



