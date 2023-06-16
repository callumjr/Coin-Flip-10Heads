let heads = 0;
let coinFlips = 0;
const flipLimit = 100000;

const flipCoin = () => {
  let result = Math.random() < 0.5 ? "Heads" : "Tails";

  coinFlips += 1;
  if (result === "Heads") heads += 1;
  else heads = 0;

  return result;
};

while (heads < 11 && coinFlips < flipLimit) {
  flipCoin();
}

console.log(coinFlips);

// 0.5^100
