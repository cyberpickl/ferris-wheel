let below18 = 8;
let above18 = 12;

document.getElementById("mySubmit").onclick = function() {
    let age = Number(document.getElementById("ageInput").value);

    if (isNaN(age)) {
        document.getElementById("myResult").textContent = "Please enter a valid age.";
    } else if (age >= 18) {
        document.getElementById("myResult").textContent = `Please pay $${above18}.`;
    } else {
        document.getElementById("myResult").textContent = `Please pay $${below18}.`;
    }
};

