function processCategories(arr) {
  const counts = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1]);
}

// Example
const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
console.log(processCategories(input));