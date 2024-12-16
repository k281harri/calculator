let balance = 0;
let depositInput = '';
let withdrawInput = '';

function updateBalance() {
    document.getElementById('balance-text').innerText = `Current Balance: $${balance}`;
}

function checkBalance() {
    updateBalance();
}

function deposit() {
    document.getElementById('deposit-section').style.display = 'block';
    document.getElementById('withdraw-section').style.display = 'none';
    document.getElementById('error-message').innerText = '';
}

function withdraw() {
    document.getElementById('withdraw-section').style.display = 'block';
    document.getElementById('deposit-section').style.display = 'none';
    document.getElementById('error-message').innerText = '';
}

function exitATM() {
    alert("Thank you for using the ATM!");
}

function addDigit(type, digit) {
    if (type === 'deposit') {
        depositInput += digit;
        document.getElementById('deposit-section').querySelector('label').innerText = `Deposit Amount: $${depositInput}`;
    } else if (type === 'withdraw') {
        withdrawInput += digit;
        document.getElementById('withdraw-section').querySelector('label').innerText = `Withdraw Amount: $${withdrawInput}`;
    }
}

function clearInput(type) {
    if (type === 'deposit') {
        depositInput = '';
        document.getElementById('deposit-section').querySelector('label').innerText = `Deposit Amount: $0`;
    } else if (type === 'withdraw') {
        withdrawInput = '';
        document.getElementById('withdraw-section').querySelector('label').innerText = `Withdraw Amount: $0`;
    }
}

function makeDeposit() {
    const depositAmount = parseFloat(depositInput);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        document.getElementById('error-message').innerText = "Please enter a valid deposit amount.";
    } else {
        balance += depositAmount;
        updateBalance();
        depositInput = '';
        document.getElementById('deposit-section').querySelector('label').innerText = `Deposit Amount: $0`;
    }
}

function makeWithdrawal() {
    const withdrawAmount = parseFloat(withdrawInput);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        document.getElementById('error-message').innerText = "Please enter a valid withdrawal amount.";
    } else if (withdrawAmount > balance) {
        document.getElementById('error-message').innerText = "Insufficient balance!";
    } else {
        balance -= withdrawAmount;
        updateBalance();
        withdrawInput = '';
        document.getElementById('withdraw-section').querySelector('label').innerText = `Withdraw Amount: $0`;
    }
}

