var shares=document.querySelector("#no-of-shares");
var price=document.querySelector("#stock-price");
var currentPrice=document.querySelector("#current-price");
var outputBtn=document.querySelector("#output-btn");
var output=document.querySelector("#answer");

outputBtn.addEventListener("click", resultHandler)

function resultHandler(){
    var stocks = shares.value;
    var cost = price.value;
    var curCost = currentPrice.value;
    var oldProduct = stocks*cost;
    var newProduct = stocks*curCost;
    console.log("Stocks "+stocks+" Cost "+cost+" CurrentCost "+curCost)
    if(oldProduct<newProduct){
        var diff = newProduct-oldProduct;
        var profitPer = (diff/cost)*100;
        console.log("Profit ", diff , profitPer);
        output.innerText = "You are smart";
    }
    else if (oldProduct>newProduct){
        var lossDiff = oldProduct-newProduct;
        var lossPer = (lossDiff/cost)*100;
        console.log("Loss ", lossDiff , lossPer);
        output.innerText = "Not so smart";
    }
    else{
        console.log("No pain, no gain and no gain, no pain")
    }

}

 