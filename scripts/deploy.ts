import fetch from "node-fetch";

async function main() {
  const usdt = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  const holders = 1;
  const url = `https://api.ethplorer.io/getTopTokenHolders/${usdt}?apiKey=freekey&limit=${holders}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data && data.holders && data.holders.length > 0) {
    const addressWithHighestBalance = data.holders[0].address;
    const highestBalance = Number(data.holders[0].balance);
    console.log(
      `The address with the highest USDT balance is ${addressWithHighestBalance} with a balance of ${highestBalance} USDT`
    );
  } else {
    console.log(
      "There was an error fetching USDT data from the API, or there are no USDT holders on the Ethereum network."
    );
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
