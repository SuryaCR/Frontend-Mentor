const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  calculateTip("#tip5", "#tip10", "#tip15", "#tip25", "#tip50", "#reset");
});

const bill = document.getElementById("bill");
const tip5 = document.getElementById("tip5");
const tip10 = document.getElementById("tip10");
const tip15 = document.getElementById("tip15");
const tip25 = document.getElementById("tip25");
const tip50 = document.getElementById("tip50");
const reset = document.getElementById("reset");
const inpPeople = document.getElementById("inpPeople");
const customTips = document.getElementById("custom");

function calculateTip(tip5, tip10, tip15, tip25, tip50, reset) {
  const d = document;
  d.addEventListener("click", (e) => {
    if (e.target.matches(tip5)) {
      if (bill.value && inpPeople.value) {
        const resultado = (bill.value * 5) / 100;
        const resultado2 = resultado;
        const a = parseInt(resultado);
        const b = parseInt(resultado2) / inpPeople.value;

        document.querySelector(".textDiv").innerHTML = a + ".00";
        document.querySelector(".secondTextDiv").innerHTML = b + ".00";
      }
    }
    if (e.target.matches(tip10)) {
      if (bill.value && inpPeople.value) {
        const resultado = (bill.value * 10) / 100;
        const resultado2 = resultado;
        const a = parseInt(resultado);
        const b = parseInt(resultado2) / inpPeople.value;

        document.querySelector(".textDiv").innerHTML = a + ".00";
        document.querySelector(".secondTextDiv").innerHTML = b + ".00";
      }
    }
    if (e.target.matches(tip15)) {
      if (bill.value && inpPeople.value) {
        const resultado = (bill.value * 15) / 100;
        const resultado2 = resultado;
        const a = parseInt(resultado);
        const b = parseInt(resultado2) / inpPeople.value;

        document.querySelector(".textDiv").innerHTML = a + ".00";
        document.querySelector(".secondTextDiv").innerHTML = b + ".00";
      }
    }
    if (e.target.matches(tip25)) {
      if (bill.value && inpPeople.value) {
        const resultado = (bill.value * 25) / 100;
        const resultado2 = resultado;
        const a = parseInt(resultado);
        const b = parseInt(resultado2) / inpPeople.value;

        document.querySelector(".textDiv").innerHTML = a + ".00";
        document.querySelector(".secondTextDiv").innerHTML = b + ".00";
      }
    }
    if (e.target.matches(tip50)) {
      if (bill.value && inpPeople.value) {
        const resultado = (bill.value * 50) / 100;
        const resultado2 = resultado;
        const a = parseInt(resultado);
        const b = parseInt(resultado2) / inpPeople.value;

        document.querySelector(".textDiv").innerHTML = a + ".00";
        document.querySelector(".secondTextDiv").innerHTML = b + ".00";
      }
    }
    if (e.target.matches(reset)) {
      bill.value = 0;
      inpPeople.value = 0;
      document.getElementById("div1").innerHTML = "$0.00";
      document.getElementById("div2").innerHTML = "$0.00";
    }
  });
}
