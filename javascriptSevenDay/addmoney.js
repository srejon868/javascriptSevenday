document.getElementById("AddMOneyBtn").addEventListener("click",function(){

    /* at first we try to get a  bankAccount and if he didn't  select a  bankAccount number then we give a  alert()  */
    let bankAccount = getValueFromId("AddMOneyBank");
    if(bankAccount == "Select A Bank"){
        alert("Plese enter your bank Account Number");
        return;
    }

    /* we try to get a bank account Number and if length is not equal to 11 then return user form here*/
    const acccountNumber = getValueFromId("inputAddMOneyNum");

    if(acccountNumber.length !=11){
        alert("Please check your account number");
        return;
    }

    /* we try to get a inputAddMoneyAmmount Number and */
    const inputAddMoneyAmmount = getValueFromId("inputAddMoneyAmmount");

    const newbalence = getBalence() + Number(inputAddMoneyAmmount);

    const pin = getValueFromId("PinAddMoneyInput");



   if(newbalence<0){
     alert("Invaild balence");
     return;
   }


   if(pin == "1234"){
    alert("addMoney sucesfull");

    setBalence(newbalence);
    console.log(newbalence);

    /* for history: */
    //1:history container khaw dhora niya asbo
    const historyContainer = document.getElementById("history-container");
    /* new-div-crete-korbu */
    const newhistory = document.createElement("div");
    newhistory.innerHTML=` 
     <div class="card bg-base-100 w-96 shadow-sm">
  <div>
   Add money sucess form :
   ${ bankAccount} at ${new Date()} and balence is: ${newbalence};
  </div>
</div>
    `
    historyContainer.append(newhistory);
   }
   else{
    alert("Please check your pin number");
   }
})