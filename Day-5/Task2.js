const products = [
  { name: "Laptop", price: 60000, inStock: true },
  { name: "Phone", price: 30000, inStock: false },
  { name: "Tablet", price: 25000, inStock: true },
  { name: "Headphones", price: 3000, inStock: true }
];

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productPrice = products[i].price;
    
    if(productPrice>50000){
       console.log(product)
    }
}