function processProducts(products) {
  const names = products.map((p) => p.name);

  products.forEach((p) => {
    if (p.price > 550) {
      console.log(`${p.name} is above 550`);
    } else {
      console.log(`${p.name} is below 550`);
    }
  });
}

processProducts([
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
]);