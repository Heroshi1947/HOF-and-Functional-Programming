  
  const prices = {
    "apple": 10,
    "banana": 20,
    "orange": 30,
  };
  
  const exchangeRate = 80;
  
  // .map method works only on arrays so  Object.entries method to get an array of key-value pairs from the prices object. 
  const convertedPrices = Object.entries(prices).map(([item, price]) => {
    return {
      item,
      priceInRupee: price * exchangeRate,
    };
  });
  
  console.log(convertedPrices);