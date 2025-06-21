const xamsterImg = document.getElementById("xamsterImage");
const coinCount = document.getElementById("coinShower");

const bubleWrapper = document.getElementById("bubleWrapper");
let addition = localStorage.getItem("addition") || 1;
localStorage.setItem("addition", addition);
console.log(localStorage.getItem("addition"));

let count = Number(localStorage.getItem("coinCount")) || Number(coinCount.textContent);
coinCount.textContent = count;





function increaseNumber() {

    console.log(localStorage.getItem("addition"));
    
    count += Number(addition);
    coinCount.textContent = count;

    localStorage.setItem("coinCount", count);

    const bubble = document.createElement("div");
    bubble.textContent = `+${addition}`;
    bubble.style.position = "absolute";
    bubble.style.left = "50%";
    bubble.style.top = "50%";
    bubble.style.transform = "translate(-50%, 0)";
    bubble.style.fontSize = "24px";
    bubble.style.color = "gold";
    bubble.style.fontWeight = "bold";
    bubble.style.pointerEvents = "none";
    bubble.style.opacity = "1";
    bubble.style.transition = "transform 1s ease-out, opacity 1s ease-out";

    bubleWrapper.appendChild(bubble);

    requestAnimationFrame(() => {
        bubble.style.transform = "translate(-50%, -180px)";
        bubble.style.opacity = "0";
    });

    setTimeout(() => {
        bubble.remove();
    }, 850);

    xamsterImg.style.transition = "transform 0.1s ease";
    xamsterImg.style.transform = "scale(0.98)";

    setTimeout(() => {
        xamsterImg.style.transform = "scale(1)";
    }, 100);
}

xamsterImg.addEventListener("click", function () {
    increaseNumber();
});

document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    increaseNumber();
  }
});

function transformToUpg(){
    window.location.href = "./sections/ungrades.html"
}

function transformToInvst(){
    window.location.href = "./sections/investments.html"
}

function transformToWallet(){
    window.location.href = "./sections/wallet.html"
}
