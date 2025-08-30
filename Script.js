let btn = document.getElementById("btn");
const Dnumber = 1715555555;
const Dpin = 12345;

btn.addEventListener("click", function (event) {
    event.preventDefault();
    let number = document.getElementById("number").value;
    let pin = document.getElementById("pin").value;
    const convertedNumber = parseInt(number);
    const convertedPin = parseInt(pin);

    if (convertedNumber === Dnumber && convertedPin === Dpin) {
        console.log("You are in");
    } else {
        alert("Not match");
    }
});
