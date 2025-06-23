const coinCount = document.getElementById("coinShower");
const tapAdditionBtn = document.querySelector(".upg-purchase-btn");
const additionShower = document.querySelector(".additionDisplayer");
let count = Number(localStorage.getItem("coinCount"));
let addition = Number(localStorage.getItem("addition"));

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
