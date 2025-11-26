 console.log("Message 1 immediately");

setTimeout(() => {
  console.log("Message 2 after 2 seconds");
}, 2000);

console.log("Message 3 immediately after Message 1");