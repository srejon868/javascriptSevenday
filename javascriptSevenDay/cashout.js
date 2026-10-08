document.getElementById("loginBtn").addEventListener("click",function(){
   let cashOutNumValue = getValueFromId("inputCashOutNum");
  // console.log(cashOutNumValue);
   if(cashOutNumValue.length !=11){
      alert("Plese check your number sometings wrong");
      return;
   }

   let CashOutAmmountValue= getValueFromId("inputCashOutAmmount");

 
   let CurrentAmountValue = getBalence();


   let newbalance =  CurrentAmountValue - Number(CashOutAmmountValue);

    if(newbalance<0){

    alert("Invaild ammount")
   return;
  }

  let PinCashOutValue = getValueFromId("PinCashOutInput");

if(PinCashOutValue == "1234"){
   alert("Cashout successful");

   setBalence(newbalance);
console.log("Here is your newbalence :" + newbalance);
}
else{
   alert("Please check your Pin number");
}


})









/* document.getElementById("loginBtn").addEventListener("click",function(){
   let cashoutNum = document.getElementById("inputCashOutNum");

   let cashOutNumValue = cashoutNum.value;

   if(cashOutNumValue.length !=11){
      alert("Plese check your number sometings wrong");
      return;
   }
   let CashoutAmmount = document.getElementById("inputCashOutAmmount");
   let CashOutAmmountValue = CashoutAmmount.value;

   let CurrentAmount = document.getElementById("mainbalance");
   let CurrentAmountValue = CurrentAmount.innerText;


   let PinCashOutInput = document.getElementById("PinCashOutInput");

   let PinCashOutValue = PinCashOutInput.value;

  let newbalance = Number(CurrentAmountValue) - Number(CashOutAmmountValue);


  if(newbalance<0){

    alert("Invaild ammount")
   return;
  }

if(PinCashOutValue == "1234"){
   alert("Cashout successful");

   CurrentAmount.innerText=newbalance;
console.log("Here is your newbalence :" + newbalance);
}
else{
   alert("Please check your Pin number");
}

  
}) */