const coinCount = document.getElementById("coinShower");
const tapAdditionBtn = document.querySelector(".upg-purchase-btn");
const additionShower = document.querySelector(".additionDisplayer");
let count = Number(localStorage.getItem("coinCount"));
let addition = Number(localStorage.getItem("addition"));

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


coinCount.textContent = count;
additionShower.textContent = addition;


function purchase1() {
    if (count >= 20) {
        addition++;
        localStorage.setItem("addition", addition);
        count -= 20;
        localStorage.setItem("coinCount", count);
        coinCount.textContent = count;
        additionShower.textContent = addition;
    } else {
        alert(`You are ${20 - count} coin short!`)
    }
};
function purchase20() {
    if (count >= 500) {
        addition += 20;
        localStorage.setItem("addition", addition);
        count -= 500;
        localStorage.setItem("coinCount", count);
        coinCount.textContent = count;
        additionShower.textContent = addition;
    } else {
        alert(`You are ${500 - count} coin short!`)
    }
};
function purchase100() {
    if (count >= 2500) {
        addition += 100;
        localStorage.setItem("addition", addition);
        count -= 2500;
        localStorage.setItem("coinCount", count);
        coinCount.textContent = count;
        additionShower.textContent = addition;
    } else {
        alert(`You are ${2500 - count} coin short!`)
    }
};
function purchase500() {
    if (count >= 15000) {
        addition += 500;
        localStorage.setItem("addition", addition);
        count -= 15000;
        localStorage.setItem("coinCount", count);
        coinCount.textContent = count;
        additionShower.textContent = addition;
    } else {
        alert(`You are ${15000 - count} coin short!`)
    }
};
function purchase5000() {
    if (count >= 200000) {
        addition += 5000;
        localStorage.setItem("addition", addition);
        count -= 200000;
        localStorage.setItem("coinCount", count);
        coinCount.textContent = count;
        additionShower.textContent = addition;
    } else {
        alert(`You are ${200000 - count} coin short!`)
    }
};
function purchase40000() {
    if (count >= 2000000) {
        addition += 40000;
        localStorage.setItem("addition", addition);
        count -= 2000000;
        localStorage.setItem("coinCount", count);
        coinCount.textContent = count;
        additionShower.textContent = addition;
    } else {
        alert(`You are ${2000000 - count} coin short!`)
    }
};
function purchase4() {
    if (count >= 90) {
        addition += 4;
        localStorage.setItem("addition", addition);
        count -= 90;
        localStorage.setItem("coinCount", count);
        coinCount.textContent = count;
        additionShower.textContent = addition;
    } else {
        alert(`You are ${90 - count} coin short!`)
    }
};
function purchase40() {
    if (count >= 900) {
        addition += 40;
        localStorage.setItem("addition", addition);
        count -= 900;
        localStorage.setItem("coinCount", count);
        coinCount.textContent = count;
        additionShower.textContent = addition;
    } else {
        alert(`You are ${900 - count} coin short!`)
    }
};
function purchase250() {
    if (count >= 6000) {
        addition += 250;
        localStorage.setItem("addition", addition);
        count -= 6000;
        localStorage.setItem("coinCount", count);
        coinCount.textContent = count;
        additionShower.textContent = addition;
    } else {
        alert(`You are ${6000 - count} coin short!`)
    }
};
function purchase1500() {
    if (count >= 35000) {
        addition += 1500;
        localStorage.setItem("addition", addition);
        count -= 35000;
        localStorage.setItem("coinCount", count);
        coinCount.textContent = count;
        additionShower.textContent = addition;
    } else {
        alert(`You are ${35000 - count} coin short!`)
    }
};
function purchase15000() {
    if (count >= 650000) {
        addition += 15000;
        localStorage.setItem("addition", addition);
        count -= 650000;
        localStorage.setItem("coinCount", count);
        coinCount.textContent = count;
        additionShower.textContent = addition;
    } else {
        alert(`You are ${650000 - count} coin short!`)
    }
};
function purchase100000() {
    if (count >= 6000000) {
        addition += 100000;
        localStorage.setItem("addition", addition);
        count -= 6000000;
        localStorage.setItem("coinCount", count);
        coinCount.textContent = count;
        additionShower.textContent = addition;
    } else {
        alert(`You are ${6000000 - count} coin short!`)
    }
};
// hello

function moveWindow(){
    window.location.href = "/index.html"
};

document.querySelector(".upg-back-btn").addEventListener("click", function(){
    moveWindow();
});
