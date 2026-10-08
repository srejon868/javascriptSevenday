document.getElementById("AddMoneyBtn").addEventListener("click",function(){
    const getbankValue = getid("selectAnbankAccount");
    if(getbankValue == "Select A Bank"){
              alert("Please select a bank account");
              return;
    }
    
    const AddMoneyNum = getid("AddMoneyNum");
    const AddMoneybalance = getid("AddMoneybalance");
    const AddMoneyPinNum = getid("AddMoneyPinNum");
    const mainbalence = document.getElementById("mainbalence");
    const mainbalenceValue = mainbalence.innerText;


    if(AddMoneyNum.length !=11){
        alert("Please check your mobile number");
        return;
    };

    const newbalence = Number(AddMoneybalance) + Number(mainbalenceValue);

    
       if(AddMoneyPinNum =="1234"){
       
         mainbalence.innerText=newbalence;
         return;
    }
    else{
      alert("Check your pin number");
      return;
    }   
});