document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");
  const depositAmount = depositInput.value;

  const depositTotal = document.getElementById("deposit-total");
  const currentDepositTotal = depositTotal.innerText;
  const newDepositTotal =
    parseInt(currentDepositTotal) + parseInt(depositAmount);
  depositTotal.innerText = newDepositTotal;
  depositInput.value = "";

  //add to balance
  const totalBalance = document.getElementById("total-balance");
  const totalBalanceAmount = totalBalance.innerText;
  totalBalance.innerText =
    parseInt(totalBalanceAmount) + parseInt(depositAmount);
});

//handle withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawAmount = withdrawInput.value;

  const withdrawTotal = document.getElementById("withdraw-total");
  const currentWithdrawTotal = withdrawTotal.innerText;
  const newWithdrawTotal =
    parseInt(withdrawAmount) + parseInt(currentWithdrawTotal);
  withdrawTotal.innerText = newWithdrawTotal;
  withdrawInput.value = "";

  //subtract from balance
  const totalBalance = document.getElementById("total-balance");
  const totalBalanceAmount = totalBalance.innerText;
  totalBalance.innerText =
    parseInt(totalBalanceAmount) - parseInt(withdrawAmount);
});
