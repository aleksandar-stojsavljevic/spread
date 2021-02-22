let original = {
  name: "Sale",
  address: {
    street: "Arsenija Carnojevica 77/17",
    city: "Subotica",
    zipCode: 24000,
    country: "Serbia",
  },
};

console.log("original", original);

let copied = { ...original };

console.log("copied", copied);

copied.address.city = "Beograd";

console.log("original after change", original);
console.log("copied after change", copied);
