function calculateTax() {
  const applicantName = document.getElementById("name").value;
  const grossIncome = parseInt(document.getElementById("grossIncome").value);
  const extraIncome = parseInt(document.getElementById("extraIncome").value);
  const deduction = parseInt(document.getElementById("deduction").value);
  const age = document.getElementById("age").value;

  const actIncome = grossIncome + extraIncome - deduction;
  let taxAmount;

  if (actIncome <= 800000) {
      document.getElementById("result").innerHTML = `Dear ${applicantName}, you are TAX FREE..!!! and your income is less than 8L ie: ${actIncome}`;
  } else {
      document.getElementById("result").innerHTML = `Your are Eligible for TAX, Please wait we are calculating your TAX...`;
      setTimeout(() => {
          taxAmount = taxCalculation(age, actIncome);
          const finalAmt = actIncome - taxAmount;
          document.getElementById("result").innerHTML = `Dear ${applicantName}, Your overall income will be ${finalAmt} after tax deduction of ${taxAmount}`;
      }, 2000); // Simulating tax calculation with a delay
  }
}

function taxCalculation(age, income) {
  let percentage, taxAmount;
  if (age === "<40") {
      percentage = 0.3;
  } else if (age === ">=40 & <60") {
      percentage = 0.4;
  } else {
      percentage = 0.1;
  }
  taxAmount = percentage * (income - 800000);
  return taxAmount;
}

