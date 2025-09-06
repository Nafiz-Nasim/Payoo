const submit = document.getElementById("submit");
const addmoney = document.getElementById("addmoney");
const addmoneydiv = document.getElementById("addmoneydiv");
const cashout = document.getElementById("cashout");
const cashoutdiv = document.getElementById("cashoutdiv");
const Transfer = document.getElementById("Transfer");
const bonus = document.getElementById("bonus");
const transactions = document.getElementById("transactions");
const paybill = document.getElementById("paybill");
const Transferdiv = document.getElementById("Transferdiv");
const pinInput = document.getElementById("pin");
const numberInput = document.getElementById("number");
const mainAmountElement = document.getElementById("mainammount");
const amountInput = document.getElementById("Amount");
const bankSelection = document.getElementById("bankSelection");
const TSSubmit = document.getElementById("TSSubmit");
const paysubmit = document.getElementById("paysubmit");
const BonusSubmit = document.getElementById("BonusSubmit");
const transdiv=document.getElementById("transdiv")
let datas = [];


// for the verification of the account number 
function VerificationOfNumber(id) {
    const vall = document.getElementById(id).value;


    if (vall.length !== 11 || isNaN(vall)) {
        console.error("Account number must be 11 digits.");
        alert("Account number must be 11 digits.");
        return;
    }
}
// for the verification of the pin
function VerificationOfPin(id) {
    const pin = document.getElementById(id).value;
    if (pin.length !== 4) {
        alert("PIN must be 4 digits.")
        return false;
    }
    return true;



}
// for the sum of tk
function addtk(documentofaddmoney) {


    let tk = parseInt(document.getElementById("mainammount").innerHTML);

    let addtk = parseInt(document.getElementById(documentofaddmoney).value);
    tk = tk + addtk;
    document.getElementById("mainammount").innerHTML = tk;

}

function substractiontk(documentofsubmoney) {
    let tk = parseInt(document.getElementById("mainammount").innerHTML);

    let addtk = parseInt(document.getElementById(documentofsubmoney).value);
    tk = tk - addtk;
    document.getElementById("mainammount").innerHTML = tk;

}
// array that carry the all the div value that i have to change the for the hidden and toggle
const divs = [addmoneydiv, cashoutdiv, Transferdiv, Bonusdiv, transdiv, paybilldiv];
function toggleDivVisibility(targetDiv) {

    divs.forEach(div => div.classList.add("hidden"));
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
Transfer.addEventListener('click', function (e) {
    e.preventDefault();
    toggleDivVisibility(Transferdiv)
})
// get Bonus option
bonus.addEventListener('click', function (e) {
    e.preventDefault();
    toggleDivVisibility(Bonusdiv)
})
// pay bill option

paybill.addEventListener('click', function (e) {
    e.preventDefault();
    toggleDivVisibility(paybilldiv)
})
// transactions
transactions.addEventListener('click', function (e) {
    e.preventDefault();
    toggleDivVisibility(transdiv)

for (const element of datas) {
const div=document.createElement("div");
div.innerHTML=`  <div
      id="historydiv"
      class="form mx-5 sm:mx-0 sm:px-5 flex flex-row gap-5 mt-5 items-center bg-[#a2bbee] py-5 rounded-2xl px-2"
    >
    <div class="left bg-[#0808082d] p-3 rounded-3xl">
        <img src="assets/wallet1.png"" alt="" ">
      </div>
      <div class="right">
        <h3 class="historyhead">${element.name}</h3>
        <p class="historytime">${element.time}</p>
      </div>
     
    </div>`
    
transdiv.appendChild(div)
}
   console.log(datas[0].time,datas[0].name);
   



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


    const data = {
        name: "Add Money",
        time: Date().toLocaleTimeString()

    }
    datas.push(data);
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
    const data = {
        name: "Cashout Money",
        time: new Date().toLocaleTimeString()

    }
    datas.push(data);
});

// transfer section
TSSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    VerificationOfNumber("TSNumber");
    VerificationOfPin("TSPin");
    substractiontk("TSAmount");
    const data = {
        name: "Transfer Money",
        time: new Date().toLocaleTimeString()

    }
    datas.push(data);
})


// Bonus
BonusSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    if (VerificationOfPin("BonusPin")) {
        let tk = parseInt(document.getElementById("mainammount").innerHTML);


        tk = parseInt(tk + 500);
        document.getElementById("mainammount").innerHTML = tk;
    }



})
// pay now
paysubmit.addEventListener('click', function (e) {
    e.preventDefault();
    VerificationOfNumber("payaccountnumber");
    VerificationOfPin("paypin");
    substractiontk("payAmount");
    const data = {
        name: "Pay Money",
        time: new Date().toLocaleTimeString()

    }
    datas.push(data);

})

// for the hoistory 








