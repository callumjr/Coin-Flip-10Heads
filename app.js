let heads = 0;
let coinFlips = 0;
let tenHeadscount = [];
const flipLimit = 100000;

const flipCoin = () => {
  let result = Math.random() < 0.5 ? "Heads" : "Tails";

  coinFlips += 1;
  if (result === "Heads") heads += 1;
  else heads = 0;

  return result;
};

const flipTenHeads = () => {
  while (tenHeadscount.length < 10000) {
    while (heads < 11 && coinFlips < flipLimit) {
      flipCoin();
    }

    tenHeadscount.push(coinFlips);
    heads = 0;
    coinFlips = 0;
  }

  return tenHeadscount;
};

const mean = (numbers) => {
  const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return sum / 10000;
};

console.log(mean(flipTenHeads()));
