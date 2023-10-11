/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const wealth = []
    accounts.forEach((account) => {wealth.push(account.reduce((a,b)=> a+b,0))})
    return Math.max(...wealth)
};