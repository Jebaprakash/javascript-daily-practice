const orders = [
  { amount: 200 },
  { amount: 450 },
  { amount: 130 }
];

const total = orders.reduce((sum, order) => {
  return sum + order.amount;
}, 0);
 console.log(total)