document.addEventListener("DOMContentLoaded", function () {
  const billInput = document.getElementById("bill");
  const tipInputs = Array.from(document.querySelectorAll(".tip"));
  const peopleInput = document.getElementById("people");
  const resultTip = document.getElementById("result-tip");
  const resultTotal = document.getElementById("result-total");
  const customTipInput = document.getElementById("custom-tip");
  const resetButtton = document.getElementById("reset");
  const errorMessage = Array.from(
    document.getElementsByClassName("error-message")
  );

  let billValue = 0;
  let tipValue = 0;
  let peopleValue = 0;

  function checkNumberValidity(value, input) {
    const regex = /^\d+$/;
    if (value === 0 || value < 0) {
      input.style.border = "2px solid #E17052";
    } else {
      input.style.border = "";
    }
  }

  billInput.addEventListener("input", (event) => {
    billValue = Number(event.target.value);
    checkNumberValidity(billValue, billInput);
    calculation();
  });

  // Function to remove 'clicked' class from all buttons
  function removeClickedClassFromAllButtons() {
    tipInputs.forEach((button) => {
      button.classList.remove("clicked");
    });
  }

  tipInputs.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (button.classList.contains("clicked")) {
        button.classList.remove("clicked");
        tipValue = "";
      } else {
        // event.stopImmediatePropagation();
        removeClickedClassFromAllButtons();
        button.classList.add("clicked");
        tipValue = parseInt(event.target.innerText);
        customTipInput.value = "";
      }

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
      // tip per person
      let tipResultValue = (billValue * (tipValue / 100)) / peopleValue;

      // total per person
      let totalValue = (billValue + tipResultValue) / peopleValue;

      // update UI with results
      resultTip.innerText = `$${tipResultValue.toFixed(2)}`;
      resultTotal.innerText = `$${totalValue.toFixed(2)}`;
    } else {
      // handle empty input
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
});
