const submit = document.getElementById("submit");
const addmoney = document.getElementById("addmoney");
const addmoneydiv = document.getElementById("addmoneydiv");
const cashout = document.getElementById("cashout");
const cashoutdiv = document.getElementById("cashoutdiv");
const pinInput = document.getElementById("pin");
const numberInput = document.getElementById("number");
const mainAmountElement = document.getElementById("mainammount");
const amountInput = document.getElementById("Amount");
const bankSelection = document.getElementById("bankSelection");

const divs=[addmoneydiv,cashoutdiv];
function toggleDivVisibility(targetDiv){

divs.forEach(div=> div.classList.add("hidden"));
targetDiv.classList.toggle("hidden");

}


addmoney.addEventListener('click', function (e) {
    e.preventDefault();
   toggleDivVisibility(addmoneydiv)

})
cashout.addEventListener('click', function (e) {
    e.preventDefault();

 toggleDivVisibility(cashoutdiv)

})

submit.addEventListener('click', function (event) {
    event.preventDefault();


    const pin = pinInput.value;
    const number = numberInput.value;
    const mainAmount = parseInt(mainAmountElement.innerText);
    const amount = parseInt(amountInput.value);

    if (number.length !== 11 || isNaN(number)) {
        console.error("Account number must be 11 digits.");
        alert("Account number must be 11 digits.");
        return;
    }

    
    if (pin.length !== 4 || isNaN(pin)) {
        console.error("PIN must be 4 digits.");
        alert("PIN must be 4 digits.");
        return; // Stop execution if PIN is invalid
    }

    // Check if any parsed value for amounts is NaN
    if (isNaN(amount) || isNaN(mainAmount)) {
        console.error("Invalid amount detected.");
        alert("Please enter valid amounts.");
        return; // Stop execution if any value is invalid
    }

    console.log(bankSelection, number, mainAmount, amount);

    // Calculate total balance and update
    const totalBalance = amount + mainAmount;
    mainAmountElement.innerText = totalBalance;
});
// for Cash out
const CoSubmit = document.getElementById("CoSubmit");
const COPin = document.getElementById("COPin");
const CoNumber = document.getElementById("CoNumber");
const CoAmount = document.getElementById("CoAmount");


CoSubmit.addEventListener('click', function (event) {
    event.preventDefault();

    // Parse inputs
    const pin = COPin.value;
    const number = CoNumber.value;
    const mainAmount = parseInt(mainAmountElement.innerText);
    const amount = parseInt(CoAmount.value);

    // Validate account number (must be exactly 11 digits)
    if (number.length !== 11 || isNaN(number)) {
        console.error("Account number must be 11 digits.");
        alert("Account number must be 11 digits.");
        return; // Stop execution if account number is invalid
    }

    // Validate pin (must be exactly 4 digits)
    if (pin.length !== 4 || isNaN(pin)) {
        console.error("PIN must be 4 digits.");
        alert("PIN must be 4 digits.");
        return; // Stop execution if PIN is invalid
    }

    // Check if any parsed value for amounts is NaN
    if (isNaN(amount) || isNaN(mainAmount)) {
        console.error("Invalid amount detected.");
        alert("Please enter valid amounts.");
        return; // Stop execution if any value is invalid
    }

    console.log(bankSelection, number, mainAmount, amount);


    const totalBalance = mainAmount - amount;
    mainAmountElement.innerText = totalBalance;
});