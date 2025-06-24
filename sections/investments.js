const investDisplayer = document.querySelector(".coinDisplayer");
let count = Number(localStorage.getItem("coinCount"));
let investRisk = 0;
let investRiskPer = 0;
let investProfit = 0;



investDisplayer.textContent = count;

function investOperate1() {
    investRisk = Number(document.querySelector(".invest-inp1").value);
    if (count >= Number(document.querySelector(".invest-inp1").value) && investRisk > 0) {
        const form1 = document.querySelector(".form1")
        const paragraph1 = document.querySelectorAll(".invest-p1")
        investRiskPer = Math.floor(Math.random() * 41) - 20;
        investProfit = Math.floor(investRisk * investRiskPer / 100);

        document.querySelector(".profit-percent1").textContent = investRiskPer;

        document.querySelector(".profit-display1").textContent = investProfit;
        document.querySelector(".invest-inp1").value = "";
        count += investProfit;
        investDisplayer.textContent = count;
        localStorage.setItem("coinCount", count);

        paragraph1.forEach(p => {
            p.style.color = investRiskPer > 0 ? "rgb(82, 242, 82)" : investRiskPer < 0 ? "rgb(250, 69, 69)" : "white";
        })

        form1.addEventListener("submit", function (event) {
            event.preventDefault();
        });
    } else {
        alert("You don't have enough coins or you entered unavaible amount for this investment!")
    };
};
function investOperate2() {
    investRisk = Number(document.querySelector(".invest-inp2").value);
    if (count >= Number(document.querySelector(".invest-inp2").value) && investRisk > 0) {
        const form2 = document.querySelector(".form2")
        const paragraph2 = document.querySelectorAll(".invest-p2")
        investRiskPer = Math.floor(Math.random() * 51) - 25;
        investProfit = Math.floor(investRisk * investRiskPer / 100);
        document.querySelector(".profit-percent2").textContent = investRiskPer;

        document.querySelector(".profit-display2").textContent = investProfit;
        document.querySelector(".invest-inp2").value = "";
        count += investProfit;
        investDisplayer.textContent = count;
        localStorage.setItem("coinCount", count);

        paragraph2.forEach(p => {
            p.style.color = investRiskPer > 0 ? "rgb(82, 242, 82)" : investRiskPer < 0 ? "rgb(250, 69, 69)" : "white";
        });


        form2.addEventListener("submit", function (event) {
            event.preventDefault();

        })
    } else {
        alert("You don't have enough coins or you entered unavaible amount for this investment!")
    }

};
function investOperate3() {
    investRisk = Number(document.querySelector(".invest-inp3").value);

    if (count >= document.querySelector(".invest-inp3").value && investRisk > 0) {
        const form3 = document.querySelector(".form3")
        const paragraph3 = document.querySelectorAll(".invest-p3")
        investRiskPer = Math.floor(Math.random() * 567) - 283;
        investProfit = Math.floor(investRisk * investRiskPer / 100);
        document.querySelector(".profit-percent3").textContent = investRiskPer;

        document.querySelector(".profit-display3").textContent = investProfit;
        document.querySelector(".invest-inp3").value = "";
        count += investProfit;
        investDisplayer.textContent = count;
        localStorage.setItem("coinCount", count);

        paragraph3.forEach(p => {
            p.style.color = investRiskPer > 0 ? "rgb(82, 242, 82)" : investRiskPer < 0 ? "rgb(250, 69, 69)" : "white";
        });


        form3.addEventListener("submit", function (event) {
            event.preventDefault();

        })
    } else {
        alert("You don't have enough coins or you entered unavaible amount for this investment!")
    }

};
function investOperate4() {
    investRisk = Number(document.querySelector(".invest-inp4").value);

    if (count >= document.querySelector(".invest-inp4").value && investRisk > 0) {
        const form4 = document.querySelector(".form4")
        const paragraph4 = document.querySelectorAll(".invest-p4")
        investRiskPer = Math.floor(Math.random() * 255) - 127;
        investProfit = Math.floor(investRisk * investRiskPer / 100);
        document.querySelector(".profit-percent4").textContent = investRiskPer;

        document.querySelector(".profit-display4").textContent = investProfit;
        document.querySelector(".invest-inp4").value = "";
        count += investProfit;
        investDisplayer.textContent = count;
        localStorage.setItem("coinCount", count);

        paragraph4.forEach(p => {
            p.style.color = investRiskPer > 0 ? "rgb(82, 242, 82)" : investRiskPer < 0 ? "rgb(250, 69, 69)" : "white";
        });


        form4.addEventListener("submit", function (event) {
            event.preventDefault();

        })
    } else {
        alert("You don't have enough coins or you entered unavaible amount for this investment!")
    }

};
function investOperate5() {
    investRisk = Number(document.querySelector(".invest-inp5").value);

    if (count >= document.querySelector(".invest-inp5").value && investRisk > 0) {
        const form5 = document.querySelector(".form5")
        const paragraph5 = document.querySelectorAll(".invest-p5")
        investRiskPer = Math.floor(Math.random() * 125) - 62;
        investProfit = Math.floor(investRisk * investRiskPer / 100);
        document.querySelector(".profit-percent5").textContent = investRiskPer;

        document.querySelector(".profit-display5").textContent = investProfit;
        document.querySelector(".invest-inp5").value = "";
        count += investProfit;
        investDisplayer.textContent = count;
        localStorage.setItem("coinCount", count);

        paragraph5.forEach(p => {
            p.style.color = investRiskPer > 0 ? "rgb(82, 242, 82)" : investRiskPer < 0 ? "rgb(250, 69, 69)" : "white";
        });


        form5.addEventListener("submit", function (event) {
            event.preventDefault();

        })
    } else {
        alert("You don't have enough coins or you entered unavaible amount for this investment!")
    }

};
function investOperate6() {
    investRisk = Number(document.querySelector(".invest-inp6").value);

    if (count >= document.querySelector(".invest-inp6").value && investRisk > 0) {
        const form6 = document.querySelector(".form6")
        const paragraph6 = document.querySelectorAll(".invest-p6")
        investRiskPer = Math.floor(Math.random() * 189) - 94;
        investProfit = Math.floor(investRisk * investRiskPer / 100);
        document.querySelector(".profit-percent6").textContent = investRiskPer;

        document.querySelector(".profit-display6").textContent = investProfit;
        document.querySelector(".invest-inp6").value = "";
        count += investProfit;
        investDisplayer.textContent = count;
        localStorage.setItem("coinCount", count);

        paragraph6.forEach(p => {
            p.style.color = investRiskPer > 0 ? "rgb(82, 242, 82)" : investRiskPer < 0 ? "rgb(250, 69, 69)" : "white";
        });


        form6.addEventListener("submit", function (event) {
            event.preventDefault();

        })
    } else {
        alert("You don't have enough coins or you entered unavaible amount for this investment!")
    }

};

function investQuit() {
    window.location.href = "/index.html"
};

document.querySelector(".invest-back-btn").addEventListener("click", function () {
    investQuit();
});