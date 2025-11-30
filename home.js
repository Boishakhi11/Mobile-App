const PinNumber = 1234;

document.getElementById('add-money-btn')
.addEventListener('click', function(e) {
    e.preventDefault()

    const BankName = document.getElementById('bank-name').value;
    const AccountNumber = document.getElementById('Account-number').value;
    const Amount = parseInt(document.getElementById('Amount').value);
    const pin = parseInt(document.getElementById('pin').value);
    const AvailableBalance = parseInt(document.getElementById('available-balance').innerText);

    const TotalAvailableBalance = AvailableBalance + Amount;

    if (AccountNumber.length < 11) {
        alert('Please Provide Valid Account Number');
        return;
    }

    if ( pin !== PinNumber){
        alert('Please provide vallid pin number');
        return;
    }
    else {
    document.getElementById('available-balance').innerText = TotalAvailableBalance;
    alert ('Money Added Succesfully');
    }
})
