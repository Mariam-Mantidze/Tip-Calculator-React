const billInput = document.getElementById("bill");
const tipInputs = Array.from(document.getElementsByClassName("tip"));
const peopleInput = document.getElementById("people");
const resultTip = document.getElementById("result-tip");
const resultTotal = document.getElementById("result-total");
const resetButtton = document.getElementById("reset");
const customTipInput = document.getElementById("custom-tip");

let billValue = 0;
let tipValue = 0;
let peopleValue = 0;

billInput.addEventListener("input", (event) => {
  billValue = Number(event.target.value);
  calculation();
});

tipInputs.forEach((button) => {
  button.addEventListener("click", (event) => {
    tipValue = parseInt(event.target.innerText);
    calculation();
  });
});

peopleInput.addEventListener("input", (event) => {
  peopleValue = Number(event.target.value);
  calculation();
});

customTipInput.addEventListener("input", (event) => {
  tipValue = Number(event.target.value);
  calculation();
});

function calculation() {
  if (peopleValue != 0) {
    // define calculation value

    // tip value per person
    let tipResultValue = (billValue * (tipValue / 100)) / peopleValue;
    // total value per person
    let totalValue = billValue / peopleValue + tipResultValue;

    // update tip UI with result
    resultTip.innerText = `$${tipResultValue.toFixed(2)}`;
    // update total UI with result
    resultTotal.innerText = `$${totalValue.toFixed(2)}`;
  } else {
    // handle empty input / update UI back to 0.
    resultTip.innerText = "$0.00";
    resultTotal.innerText = "$0.00";
  }
}

resetButtton.addEventListener("click", () => {
  billValue = 0;
  tipValue = 0;
  peopleValue = 0;
  resultTip.innerText = "$0.00";
  resultTotal.innerText = "$0.00";
  billInput.value = "";
  peopleInput.value = "";
  customTipInput.value = "";
});

// ქასთომოსთვის რესულტ ველიუ არ შევქნათ"
