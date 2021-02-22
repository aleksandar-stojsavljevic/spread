let original = {
  name: "Sale",
  address: "Arsenija Carnojevica 77/17",
  city: "Subotica",
  zipCode: 24000,
  country: "Serbia",
};

console.log("original", original);

let copied = { ...original };

console.log("copied", copied);

copied.name = "Damir";

console.log("original after change", original);
console.log("copied after change", copied);
