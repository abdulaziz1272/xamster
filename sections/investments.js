const investDisplayer = document.querySelector(".coinDisplayer");
let count = Number(localStorage.getItem("coinCount"));
let investRisk = 0;
let investRiskPer = 0;
let investProfit = 0;

investDisplayer.textContent = count;

function investOperate1() {
    const form1 = document.querySelector(".form1")
    investRisk = Number(document.querySelector(".invest-inp1").value);
    investRiskPer = Math.floor(Math.random() * 41) - 20;
    investProfit = Math.floor(investRisk * investRiskPer / 100);

    form1.addEventListener("submit", function (event) {
        event.preventDefault();
        document.querySelector(".profit-percent1").textContent = investRiskPer;
        document.querySelector(".profit-display1").textContent = investProfit;
        document.querySelector(".invest-inp1").value = "";
        count += investProfit;
        investDisplayer.textContent = count;
        localStorage.setItem("coinCount", count);
    });
};
function investOperate2() {
    const form2 = document.querySelector(".form2")
    investRisk = Number(document.querySelector(".invest-inp2").value);
    investRiskPer = Math.floor(Math.random() * 51) - 25;
    investProfit = Math.floor(investRisk * investRiskPer / 100);
    form2.addEventListener("submit", function (event){
        event.preventDefault();
        document.querySelector(".profit-percent2").textContent = investRiskPer;
        console.log(investRiskPer);
        
        document.querySelector(".profit-display2").textContent = investProfit;
        document.querySelector(".invest-inp2").value = "";
        count += investProfit;
        investDisplayer.textContent = count;
        localStorage.setItem("coinCount", count);
    })
};
function investOperate3() {
    const form3 = document.querySelector(".form3")
    investRisk = Number(document.querySelector(".invest-inp3").value);
    investRiskPer = Math.floor(Math.random() * 567) - 283;
    investProfit = Math.floor(investRisk * investRiskPer / 100);

    form3.addEventListener("submit", function (event){
        event.preventDefault();
        document.querySelector(".profit-percent3").textContent = investRiskPer;
        console.log(investRiskPer);
        
        document.querySelector(".profit-display3").textContent = investProfit;
        document.querySelector(".invest-inp3").value = "";
        count += investProfit;
        investDisplayer.textContent = count;
        localStorage.setItem("coinCount", count);
    })
};
function investOperate4() {
    const form4 = document.querySelector(".form4")
    investRisk = Number(document.querySelector(".invest-inp4").value);
    investRiskPer = Math.floor(Math.random() * 255) - 127;
    investProfit = Math.floor(investRisk * investRiskPer / 100);

    form4.addEventListener("submit", function (event){
        event.preventDefault();
        document.querySelector(".profit-percent4").textContent = investRiskPer;
        console.log(investRiskPer);
        
        document.querySelector(".profit-display4").textContent = investProfit;
        document.querySelector(".invest-inp4").value = "";
        count += investProfit;
        investDisplayer.textContent = count;
        localStorage.setItem("coinCount", count);
    })
};
function investOperate5() {
    const form5 = document.querySelector(".form5")
    investRisk = Number(document.querySelector(".invest-inp5").value);
    investRiskPer = Math.floor(Math.random() * 125) - 62;
    investProfit = Math.floor(investRisk * investRiskPer / 100);

    form5.addEventListener("submit", function (event){
        event.preventDefault(); 
        document.querySelector(".profit-percent5").textContent = investRiskPer;
        console.log(investRiskPer);
        
        document.querySelector(".profit-display5").textContent = investProfit;
        document.querySelector(".invest-inp5").value = "";
        count += investProfit;
        investDisplayer.textContent = count;
        localStorage.setItem("coinCount", count);
    })
};
function investOperate6() {
    const form6 = document.querySelector(".form6")
    investRisk = Number(document.querySelector(".invest-inp6").value);
    investRiskPer = Math.floor(Math.random() * 189) - 94;
    investProfit = Math.floor(investRisk * investRiskPer / 100);

    form6.addEventListener("submit", function (event){
        event.preventDefault(); 
        document.querySelector(".profit-percent6").textContent = investRiskPer;
        console.log(investRiskPer);
        
        document.querySelector(".profit-display6").textContent = investProfit;
        document.querySelector(".invest-inp6").value = "";
        count += investProfit;
        investDisplayer.textContent = count;
        localStorage.setItem("coinCount", count);
    })
};













function investQuit() {
    window.location.href = "/index.html"
};

document.querySelector(".invest-back-btn").addEventListener("click", function () {
    investQuit();
});