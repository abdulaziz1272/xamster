const walletDisplayer = document.querySelector(".coinDisplayer");
const walletForm = document.querySelector(".wallet-form");
let moneyShower = document.querySelector(".moneyShower")
let count = Number(localStorage.getItem("coinCount")) || walletDisplayer.textContent;
let dollar = Number(localStorage.getItem("dollarAmount")) || Number(moneyShower.textContent);


moneyShower.textContent = dollar;
walletDisplayer.textContent = count;

walletForm.addEventListener("submit", function (event) {
    let coinTransfer = Number(document.querySelector(".wallet-inp").value);
    if (count >= coinTransfer) {
        event.preventDefault();
        if (coinTransfer >= 1000000000) {
            count -= coinTransfer;
            localStorage.setItem("coinCount", count);
            walletDisplayer.textContent = count;
            dollar += (coinTransfer / 2000000000);
            localStorage.setItem("dollarAmount", dollar);
            moneyShower.textContent = dollar;
            document.querySelector(".wallet-inp").value = "";
        } else {
            alert("Please enter larger amount!")
        }
    }else{
        alert("You don't have enough coins!")
    }
});

function walletQuit() {
    window.location.href = "/index.html"
};

document.querySelector(".wallet-back-btn").addEventListener("click", function () {
    walletQuit();
});