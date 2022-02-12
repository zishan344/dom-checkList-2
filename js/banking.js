function input(inputId) {
  const idInput = document.getElementById(inputId);
  const inputIdTExt = parseFloat(idInput.value);
  idInput.value = "";
  return inputIdTExt;
}
function updateTotal(total, depositAmount) {
  const totalMoney = document.getElementById(total);
  const totalMoneyText = parseFloat(totalMoney.innerText);
  const totals = totalMoneyText + depositAmount;
  totalMoney.innerText = totals;
}
function Balance(amount) {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = parseFloat(balanceTotal.innerText);
  const previousBalance = balanceTotalText + amount;
  balanceTotal.innerText = previousBalance;
}
document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    const depositAmount = input("deposite-input");
    updateTotal("deposite-total", depositAmount);
    Balance(depositAmount);
  });
