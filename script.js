// document.addEventListener("DOMContentLoaded", function () {
//   const billInput = document.getElementById("bill");
//   const tipInputs = Array.from(document.querySelectorAll(".tip"));
//   const peopleInput = document.getElementById("people");
//   const customTipInput = document.getElementById("custom-tip");

//   let resultTip = document.getElementById("result-tip");
//   let resultTotal = document.getElementById("result-total");
//   const resetButtton = document.getElementById("reset");

//   const billError = document.getElementById("bill-error");
//   const peopleError = document.getElementById("people-error");

//   let billValue = 0;
//   let tipValue = 0;
//   let peopleValue = 0;

//   // function for checking invalid number
//   function checkNumberValidity(value, input, error) {
//     if (value < 1) {
//       input.style.outline = "2px solid #E17052";
//       error.innerText = "Can't be zero";
//     } else {
//       input.style.outline = "";
//       error.innerText = "";
//     }
//   }
//   // BILL INPUT //
//   billInput.addEventListener("input", (event) => {
//     billValue = Number(event.target.value);
//     checkNumberValidity(billValue, billInput, billError);
//     calculation();
//   });

//   // PEOPLE INPUT //
//   peopleInput.addEventListener("input", (event) => {
//     peopleValue = Number(event.target.value);
//     checkNumberValidity(peopleValue, peopleInput, peopleError);
//     calculation();
//   });

//   // CUSTOM INPUT //
//   customTipInput.addEventListener("input", (event) => {
//     tipValue = Number(event.target.value);
//     if (tipValue < 1) {
//       customTipInput.style.outline = "2px solid #E17457";
//       // customTipInput.value = "";
//     } else {
//       customTipInput.style.outline = "";
//     }
//     calculation();
//   });

//   customTipInput.addEventListener("click", () => {
//     tipInputs.forEach((button) => {
//       button.classList.remove("clicked");
//       customTipInput.style.outline = "";
//     });
//   });

//   // TIP BUTTONS
//   tipInputs.forEach((button) => {
//     button.addEventListener("click", (event) => {
//       if (button.classList.contains("clicked")) {
//         button.classList.remove("clicked");
//         tipValue = "";
//       } else {
//         // event.stopImmediatePropagation();
//         removeClickedClassFromAllButtons();
//         button.classList.add("clicked");
//         tipValue = parseInt(event.target.innerText);
//         customTipInput.value = "";
//         customTipInput.style.outline = "none";
//       }
//       calculation();
//     });
//   });

//   // Function to remove 'clicked' class from all buttons
//   function removeClickedClassFromAllButtons() {
//     tipInputs.forEach((button) => {
//       button.classList.remove("clicked");
//     });
//   }

//   //  CALCULATING TOTALS
//   function calculation() {
//     if (peopleValue > 0 && billValue > 0 && tipValue > 0) {
//       // tip per person
//       let tipResultValue = (billValue * (tipValue / 100)) / peopleValue;

//       // total per person
//       let totalValue = (billValue + tipResultValue) / peopleValue;

//       // update UI with results
//       resultTip.innerText = `$${tipResultValue.toFixed(2)}`;
//       resultTotal.innerText = `$${totalValue.toFixed(2)}`;
//     } else {
//       // handle empty input
//       resultTip.innerText = "$0.00";
//       resultTotal.innerText = "$0.00";
//     }
//   }

//   resetButtton.addEventListener("click", () => {
//     billValue = 0;
//     tipValue = 0;
//     peopleValue = 0;
//     resultTip.innerText = "$0.00";
//     resultTotal.innerText = "$0.00";
//     billInput.value = "";
//     peopleInput.value = "";
//     customTipInput.value = "";
//   });
// });
