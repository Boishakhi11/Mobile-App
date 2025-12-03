const pinNumber = 1234;

/*add money*/

document.getElementById('add-money-btn')
.addEventListener('click', function(e) {
    e.preventDefault()

    const bankName = document.getElementById('bank-name').value;
    const accountNumber = document.getElementById('Account-number').value;
    const amount = parseInt(document.getElementById('Amount').value);
    const pin = parseInt(document.getElementById('pin').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    const totalAvailableBalance = availableBalance + Amount;

    if (accountNumber.length < 11) {
        alert('Please Provide Valid Account Number');
        return;
    }

    if ( pin !== pinNumber){
        alert('Please provide vallid pin number');
        return;
    }
    else {
    document.getElementById('available-balance').innerText = totalAvailableBalance;
    alert ('Money Added Succesfully');
    }
})


/*cash out*/
document.getElementById('withdraw-money-btn')
.addEventListener('click', function(e) {
    e.preventDefault()
    const agentNumber = document.getElementById('Agent-number').value;
    const amountToWithdraw = parseInt(document.getElementById('Cash_out-amount').value)    
    const pinCode = parseInt(document.getElementById('pin-code').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    const totalAvailableBalance = availableBalance - amountToWithdraw;

    if(agentNumber.length < 11) {
        alert('Please provide valid agent number');
        return;
    }
    if (pinCode !== pinNumber){
        alert('Please Provide Valid Pin Number');
    }
    else {
        document.getElementById('available-balance').innerText = totalAvailableBalance;
    }

})


const forms = document.getElementsByClassName('form');

for ( const form of forms) {
    console.log(form);
}