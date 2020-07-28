document.getElementById("submit-button").addEventListener("click",function(){
    console.log("submit button clicked");
    document.getElementById("input-section").style.display ="none"
    document.getElementById("checkBalance-section").style.display ="block"
    
})

document.getElementById("depositBtn").addEventListener("click" , function(){
    
    let presentDeposit = toInputConvert("currentDeposit")

    updateSpanText("currentAmount",presentDeposit)

    document.getElementById("currentDeposit").value = "";

    

    updateSpanText("currentBalance",presentDeposit)
    
    


    

})
function toInputConvert(id){
    var net = document.getElementById(id).value
    let amountNOw = parseFloat(net);
    return amountNOw;
}


function updateSpanText(id,presentDeposit){
    let Balance = document.getElementById(id).innerText

    let remainBalance = parseFloat(Balance);

    let totalBalance = remainBalance + presentDeposit;

    document.getElementById(id).innerText = totalBalance;
}


//withdrawAmount part

document.getElementById("withdrawBtn").addEventListener("click", function(){

    let withdrawCurrency = toInputConvert("withdrawAmount")
    
    updateSpanText("withdrawCount",withdrawCurrency);

    document.getElementById("withdrawAmount").value = "";


   
    updateSpanText("currentBalance",-1*withdrawCurrency)
})
