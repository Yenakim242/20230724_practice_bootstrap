// Script que en el footer el añño actual
const date = new Date();
// console.log(fecha.getFullYear());
const currentYear = date.getFullYear();
const spanCurrentYear = document.querySelector(".currentYear");
spanCurrentYear.textContent = currentYear