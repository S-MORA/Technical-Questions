function changePossibilities(coins, amount, numCoins) {
  if (numCoins === undefined) {
    numCoins = coins.length;
  }
  if (amount == 0) {
    return 1;
  }
  if (amount < 0) {
    return 0;
  }
  if (amount > 0 && numCoins <= 0) {
    return 0;
  }
  return changePossibilities(coins, amount, numCoins - 1) +
    changePossibilities(coins, amount - coins[numCoins - 1], numCoins);
}
console.log(changePossibilities([1, 2, 3], 4));