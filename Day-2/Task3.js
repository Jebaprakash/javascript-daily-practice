function calculatePrice(price, discount) {
  if (discount) {
    return price - discount;
  }
  return price;
}

console.log(calculatePrice(100, 10));

//fixed code

function calculatePriceFixed(price, discount) {
  if (discount !== undefined ) {
    return price - discount;
  }
  return price;
}

console.log(calculatePrice(100, 10));