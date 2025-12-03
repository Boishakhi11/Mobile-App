//const variable for pin number
 const pinNumber = 1234;

 //function to get value
 function getValue(id) {
    const value = document.getElementById(id).value;
    return value;
 }

 //function to convert input value into number
 function convertValue(id) {
    const inputNumber = parseInt(document.getElementById(id).value);
    return inputNumber;
 }

 //function to covert innertext into number
 function convertInnertext(id) {
    const innerText = parseInt(document.getElementById(id).innerText);
    return innerText;
 }

//function to toggle 
 function handleToggle(id) {  
    const forms = document.getElementsByClassName('form');
    
    //hide all forms before showing selected one
    for (const form of forms) {
        form.style.display = "none";
    }

    //show the requested form
    document.getElementById(id).style.display = "block";
 }


 //function Of toggolecolor
 function handleToggleColor(id) {
    const btns = document.getElementsByClassName('toggoleBtn');
    
    //hide all border and background color for previous selected buttons
    for(const btn of btns) {
       btn.classList.remove('border-blue-900', 'border-gray-400', 'bg-white', 'bg-blue-100', 'border-2')
    }

    //apply color to the active button
    document.getElementById(id)
    .classList.add('border-blue-900', 'bg-blue-100', 'border-2')
 }


//add money feature
document.getElementById('add-money-btn')
    .addEventListener('click', function(e) {
        e.preventDefault()

            const bankName = getValue('bank-name');
            const accountNumber = getValue('Account-number');
            const amount = convertValue('Amount');
            const pin = convertValue('pin');
            const availableBalance = convertInnertext('available-balance');

            const totalAvailableBalance = availableBalance + amount;

    

            if ( pin !== pinNumber) {
                alert('Please provide vallid pin number');
                return;
                }

            else {
            document.getElementById('available-balance').innerText = totalAvailableBalance;
              alert ('Money Added Succesfully');
                }
            })


//cash out feature
document.getElementById('withdraw-money-btn')
.addEventListener('click', function(e) {
    e.preventDefault()
    const agentNumber = getValue('Agent-number')
    const amountToWithdraw = convertValue('Cash-out-amount') ;
    const pinCode = convertValue('pin-code');
    const availableBalance = convertInnertext('available-balance');

    const totalAvailableBalance = availableBalance - amountToWithdraw;

    if(agentNumber.length < 11) {
        alert('Please provide valid agent number');
        return;
    }

    if (pinCode !== pinNumber) {
        alert('Please Provide Valid Pin Number');
    }

    else {
        document.getElementById('available-balance').innerText = totalAvailableBalance;
        alert('Cash Out Successful')
    }

})


//Transfer Money feature

document.getElementById('transfer-money-btn')
.addEventListener('click', function(e) {
    e.preventDefault()
    const recieverNumber = getValue('reciver-account-number');
    const transferAmount = convertValue('transfer-amount');
    const transferPin = convertValue('transfer-money-pin');
    const availableBalance = convertInnertext('available-balance');

    const totalAvailableBalance = availableBalance - transferAmount;

    if(recieverNumber.length < 11){
        alert('Please Provide a Valid Account Number');
        return;
    }

    if (transferPin !== pinNumber) {
        alert('Please Provide Valid Pin Number');
        return;
    }

    else {
         document.getElementById('available-balance').innerText = totalAvailableBalance;
         alert ("Money Succesfully Transferred");
    }
})



//pay bill feature
document.getElementById('pay-now-btn')
.addEventListener('click', function(e){
    e.preventDefault()
    const bankName = getValue('pay-bill-bank-name');
    const billAcountNumber = getValue('biller-account-number');
    const amountToPay = convertValue('pay-amount');
    const pin = convertValue('pay-bill-pin');
    const availableBalance = convertInnertext('available-balance');

    const totalAvailableBalance = availableBalance - amountToPay;

    if(billAcountNumber.length < 11){
        alert('Please Provide a Valid Account Number');
        return;
    }

    if (pin!== pinNumber) {
        alert('Please Provide Valid Pin Number');
        return;
    }

    else {
         document.getElementById('available-balance').innerText = totalAvailableBalance;
         alert ("Bill paid succesfully");
    }
    console.log(bankName,billAcountNumber, amountToPay, pin);
})


document.getElementById('add-money-toggole')
.addEventListener('click', function() {
   handleToggle("add-moeny-form");
   handleToggleColor('add-money-toggole')
})

document.getElementById('cash-out-toggole')
.addEventListener('click', function(){
    handleToggle('cash-out-form');
    handleToggleColor('cash-out-toggole');
})

document.getElementById('transfer-money-toggole')
.addEventListener('click', function(){
    handleToggle('transfer-money-form');
    handleToggleColor('transfer-money-toggole');
})

document.getElementById('get-bonus-toggole')
.addEventListener('click', function(){
    handleToggle('get-bonus-form');
    handleToggleColor('get-bonus-toggole');
})

document.getElementById('pay-bill-toogole')
.addEventListener('click', function(){
    handleToggle('pay-bill-form');
    handleToggleColor('pay-bill-toogole')
})

document.getElementById('transaction-toggole')
.addEventListener('click', function(){
    handleToggle('latest-payment-form');
    handleToggleColor('transaction-toggole')
})





