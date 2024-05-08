"use strict";
function add(num1, num2 = 20) {
    return num1 + num2;
}
const sum = (num1, num2) => num1 + num2;
const peroson = {
    name: 'Fahim',
    balance: 500,
    morebalance(balance) {
        return this.balance + balance;
    }
};
const arr = [10, 20, 30, 40];
const duplicateArray = arr.map((element) => element * element);
