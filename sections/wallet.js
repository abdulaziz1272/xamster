const walletDisplayer = document.querySelector(".coinDisplayer");
const walletForm = document.querySelector(".wallet-form");
let moneyShower = document.querySelector(".moneyShower")
let count = Number(localStorage.getItem("coinCount")) || walletDisplayer.textContent;
let dollar = Number(localStorage.getItem("dollarAmount")) || Number(moneyShower.textContent);

const cheatBar = document.querySelector(".cheatBar");

let cheatWindow; // Keep track of the window outside the function
let cheatVisible = false; // Tracks open/close state

function cheatFunction() {
    if (!cheatVisible) {
        // Create the window
        cheatWindow = document.createElement("div");
        cheatWindow.classList.add("chaetwindow");

        cheatWindow.innerHTML = `
            <form>
                <input type="number" id="cheatCoin" placeholder="Overall coins">
                <input type="number" id="cheatTap" placeholder="Coins per tap">
                <input type="number" id="cheatMoney" placeholder="Money">
                <button id="cheatBtn">Close</button>
            </form>
        `;

        cheatBar.appendChild(cheatWindow); // or cheatBar.appendChild
        cheatVisible = true;

        // Close button
        document.getElementById("cheatBtn").addEventListener("click", () => {
            cheatWindow.remove();
            cheatVisible = false;
        });

    } else {
        // If already visible, remove it
        cheatWindow.remove();
        cheatVisible = false;
    }
}

const keysPressed = new Set();
document.addEventListener("keydown", function (event) {
    event.preventDefault()
    keysPressed.add(event.key.toLowerCase());

    if (
        keysPressed.has("control") &&
        keysPressed.has("a") &&
        keysPressed.has("d")
    ) {
        event.preventDefault();
        cheatFunction();
    }
});

document.addEventListener("keyup", function (event) {
    keysPressed.delete(event.key.toLowerCase());
});


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