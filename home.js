const pinNumber = 1234;



//function to toggle 
 function handleToggle(id) {
  const forms = document.getElementsByClassName('form');
   for (const form of forms) {
    form.style.display = "none";
   }
    document.getElementById(id).style.display = "block";
 }

//add money 
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


//cash out
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


document.getElementById('add-money-toggole')
.addEventListener('click', function() {
   handleToggle("add-moeny-form");
})

document.getElementById('cash-out-toggole')
.addEventListener('click', function(){
    handleToggle('cash-out-form');
})

document.getElementById('transfer-money-toggole')
.addEventListener('click', function(){
    handleToggle('transfer-money-form');
})

document.getElementById('get-bonus-toggole')
.addEventListener('click', function(){
    handleToggle('get-bonus-form');
})

document.getElementById('pay-bill-toogole')
.addEventListener('click', function(){
    handleToggle('pay-bill-form');
})

document.getElementById('transaction-toggole')
.addEventListener('click', function(){
    handleToggle('latest-payment-form');
})





