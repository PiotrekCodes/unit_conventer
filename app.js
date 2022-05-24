const input = document.querySelector(".input");
const length = document.querySelector(".length");
const volume = document.querySelector(".volume");
const mass = document.querySelector(".mass");

const meterToFeet = (inputValue) => {
  let feet = (inputValue * 3.28).toFixed(3);
  let meter = (inputValue * 0.3048).toFixed(3);
  length.innerHTML = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meter} meters`;
};

const litersToGallons = (inputValue) => {
  let gallons = (inputValue / 3.785).toFixed(3);
  let liters = (inputValue * 3.785).toFixed(3);
  volume.innerHTML = `${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters`;
};

const kilosToPounds = (inputValue) => {
  let pounds = (inputValue * 2.2).toFixed(3);
  let kilograms = (inputValue / 2.2).toFixed(3);
  mass.innerHTML = `${inputValue} kilograms = ${pounds} pounds | ${inputValue} pounds = ${kilograms} kilograms`;
};

// Onclick event added to a button to execute this function
let calculate = () => {
  let inputValue = Number(input.value);
  meterToFeet(inputValue);
  litersToGallons(inputValue);
  kilosToPounds(inputValue);
};

// Submit the input by pressing enter key
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".btn").click();
  }
});
