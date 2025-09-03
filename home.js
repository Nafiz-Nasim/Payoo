const submit = document.getElementById("submit");
const addmoney = document.getElementById("addmoney");
const addmoneydiv = document.getElementById("addmoneydiv");
const cashout = document.getElementById("cashout");
const cashoutdiv = document.getElementById("cashoutdiv");
const Transfer = document.getElementById("Transfer");
const Transferdiv = document.getElementById("Transferdiv");
const pinInput = document.getElementById("pin");
const numberInput = document.getElementById("number");
const mainAmountElement = document.getElementById("mainammount");
const amountInput = document.getElementById("Amount");
const bankSelection = document.getElementById("bankSelection");
const TSSubmit=document.getElementById("TSSubmit");


// for the verification of the account number 
function VerificationOfNumber(id)
{
    const vall=document.getElementById(id).value;
   

     if (vall.length !== 11 || isNaN(vall)) {
        console.error("Account number must be 11 digits.");
        alert("Account number must be 11 digits.");
        return;
    }
}
// for the verification of the pin
function VerificationOfPin(id)
{
    const pin=document.getElementById(id).value;
    if(pin.length!==4)
    {
        alert("PIN must be 4 digits.")

    }



}
// for the sum of tk
function addtk(documentofaddmoney)
{


let tk = parseInt(document.getElementById("mainammount").innerHTML);
    
let addtk=parseInt(document.getElementById(documentofaddmoney).value);
tk=tk+addtk;
document.getElementById("mainammount").innerHTML=tk;

}

function substractiontk(documentofaddmoney)
{


let tk = parseInt(document.getElementById("mainammount").innerHTML);
    
let addtk=parseInt(document.getElementById(documentofaddmoney).value);
tk=tk-addtk;
document.getElementById("mainammount").innerHTML=tk;

}
// array that carry the all the div value that i have to change the for the hidden and toggle
const divs=[addmoneydiv,cashoutdiv,Transferdiv];
function toggleDivVisibility(targetDiv){

divs.forEach(div=> div.classList.add("hidden"));
targetDiv.classList.toggle("hidden");

}

// add money option
addmoney.addEventListener('click', function (e) {
    e.preventDefault();
   toggleDivVisibility(addmoneydiv)

})
// cashout money option
cashout.addEventListener('click', function (e) {
    e.preventDefault();

 toggleDivVisibility(cashoutdiv)

})
// transfer money option
Transfer.addEventListener('click',function(e){
    e.preventDefault();
    toggleDivVisibility(Transferdiv)
})
// submit button for the add money
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

    // const totalBalance = amount + mainAmount;
    // mainAmountElement.innerText = totalBalance;
    addtk("Amount");
});
// for Cash out
const CoSubmit = document.getElementById("CoSubmit");
const COPin = document.getElementById("COPin");
const CoNumber = document.getElementById("CoNumber");
const CoAmount = document.getElementById("CoAmount");

// cashout button functionality
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


TSSubmit.addEventListener('click',function(e){
e.preventDefault();
VerificationOfNumber("TSNumber");
VerificationOfPin("TSPin");
substractiontk("TSAmount");

})
