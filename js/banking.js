document.getElementById('deposit-button').addEventListener('click', function () {
    const getDeposit = document.getElementById('deposit-input');
    const newDeposit = parseFloat(getDeposit.value);
    const depositTotalField = document.getElementById('deposit-total');
    const prevDepositTotal = parseFloat(depositTotalField.innerText);

    const newDepositTotal = newDeposit + prevDepositTotal;

    depositTotalField.innerText = newDepositTotal;

    const balanceTotalField = document.getElementById('balace-total');
    const balanceTotal = parseFloat(balanceTotalField.innerText);

    const newBalanceTotalDeposite = newDeposit + balanceTotal;

    balanceTotalField.innerText = newBalanceTotalDeposite;

})

document.getElementById('withdra-button').addEventListener('click', function () {
    const getWithdraw = document.getElementById('withdraw-input');
    const newWithdraw = parseFloat(getWithdraw.value);

    const WithdrawField = document.getElementById('withdraw-total');
    const prevWithdraw = parseFloat(WithdrawField.innerText);

    const withdrawTotal = newWithdraw + prevWithdraw;

    WithdrawField.innerText = withdrawTotal;

    const WithdrawbalanceTotalField = document.getElementById('balace-total');
    const WithdrawbalanceTotal = parseFloat(WithdrawbalanceTotalField.innerText);

    const newBalanceTotalWithdraw = WithdrawbalanceTotal - newWithdraw;

    WithdrawbalanceTotalField.innerText = newBalanceTotalWithdraw;





})
