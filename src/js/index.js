const purchasePrice = document.querySelector(".profit-loss #purchase-price");
const stockQty = document.querySelector(".profit-loss #stock-qty");
const currentPrice = document.querySelector(".profit-loss #current-price");
const checkBtn = document.querySelector("#check");
const output = document.querySelector(".output");
const stocksStatusImg = document.querySelector("#stocks-img");

function checkForProfitLoss() {
    showOutput();
    const purchase = purchasePrice.value;
    const qty = stockQty.value;
    const currPrice = currentPrice.value;

    if(purchase === "" || qty === "" || currPrice === "") {
        output.innerText = "Enter value for all the fields!!";
    }
    else if(Number(purchase) > 0 && Number(qty) > 0 && Number(currPrice) > 0) {
        calculateProfitLoss(Number(purchase), Number(qty), Number(currPrice));
    }
    else {
        output.innerText = "Enter valid values for all the fields!!";
    }
}

function calculateProfitLoss(purchase, qty, currPrice) {
    const buyPrice = purchase * qty;
    const sellPrice = currPrice * qty;
    if(buyPrice > sellPrice) {
        var loss = buyPrice - sellPrice;
        var lossPercentage = ( loss / buyPrice).toFixed(2) * 100;
        if(lossPercentage > 50) {
            displayImg("../assets/stonks-fall.gif");
        }
        output.innerText = "You lost: " + lossPercentage + "% " + " Your total loss: ₹" + loss;
    } else if(sellPrice > buyPrice) {
        var profit = sellPrice - buyPrice;
        var profitPercentage = (profit / buyPrice).toFixed(2) * 100;
        if(profitPercentage > 50) {
            displayImg("../assets/stonks-rise.gif");
        }
        output.innerText = "You gained: " + profitPercentage + "% " + " Your total profit: ₹" + profit;
    } else {
        output.innerText = "You made a total of ₹0";
    }
}

function displayImg(img) {
    stocksStatusImg.src = img;
}

function showOutput() {
    output.style.display = "block";
}

checkBtn.addEventListener("click", checkForProfitLoss);