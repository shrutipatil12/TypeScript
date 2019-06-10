"use strict";
exports.__esModule = true;
/*****************************************************************************************************
Execution   : cmd>tsc DeckOfCards.ts
purpose     : Write a Program DeckOfCards.java, to initialize deck of cards having suit ("Clubs", "Diamonds", "Hearts", "Spades")
              & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace").
@description
@file       : DeckOfCards.js
@overview   : Shuffle the cards using Random method and then distribute 9 Cards to 4 Players and Print the
              Cards the received by the 4 Players using 2D Array…
@module     : DeckOfCards >this is optional if explicitly its an npm or local package
@author     : Shruti
@Version    : 1.0
@since      : 4/6/2019
*******************************************************************************************************/
var DeckOfCards = /** @class */ (function () {
    function DeckOfCards() {
        this.deck = [];
        this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        this.ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        this.len = Number(this.suits.length * this.ranks.length);
    }
    /**
     * @function : cards
     * @description: the function holds the array of total cards
     */
    DeckOfCards.prototype.cards = function () {
        try {
            for (var i = 0; i < this.ranks.length; i++) {
                for (var j = 0; j < this.suits.length; j++) {
                    this.deck[this.suits.length * i + j] = this.ranks[i] + " of " + this.suits[j]; //crating card of each suits
                }
            }
            return this.deck; //returning the array of cards
        }
        catch (err) {
            console.log("error in function cards", err);
        }
    };
    /***
     * @function : shuffle
     * @description: function used to shuffle the cards
     * @param: ran, temp
     */
    DeckOfCards.prototype.shuffleCards = function () {
        try {
            for (var i = 0; i < this.len; i++) {
                var ran = i + Math.floor(Math.random() * (this.len - i)); //shuffling card using math.random function and storing in ran variable
                var temp = this.deck[ran]; // swapping cards to change their postions using temparory variable
                this.deck[ran] = this.deck[i];
                this.deck[i] = temp;
            }
            return this.deck;
        }
        catch (err) {
            console.log("error in function shuffleCards", err);
        }
    };
    /**
     * @function : distribute
     * @description: the function used to distribute the cards among 4 players
     * @param: count, card, cards
     */
    DeckOfCards.prototype.distributeCards = function () {
        try {
            var count = 4;
            var card = 9;
            var cards = [];
            for (var j = 0; j < count; j++) {
                console.log(' player' + (j + 1) + ' ');
                for (var i = 0; i < card; i++) {
                    cards[i] = this.deck[i];
                    console.log(cards[i]);
                }
                console.log('\n');
            }
        }
        catch (err) {
            console.log("error in function distributeCards", err);
        }
    };
    return DeckOfCards;
}());
exports.DeckOfCards = DeckOfCards;
var deck = new DeckOfCards(); //deck is object of class DeckOfCards
var deck1 = deck.cards(); //calling function cards using object of class
console.log("cards: \n", deck1); // displaying cards
console.log('\n\n');
var shuffle = deck.shuffleCards(); //calling function shuffle using object of class
console.log("Shuffled cards: \n", shuffle); // displaying shuffled cards
deck.distributeCards(); // calling function distribute using object of class
//module.exports=new DeckOfCards;
