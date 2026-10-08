document.getElementById("LoginBtn").addEventListener("click",function(){
    const mobileNumValue = getid("mobileNum");
    const pinNum = getid("PinNum");

    if(mobileNumValue.length !=11){
        alert("Please check your mobile number");
        return;
    }
    
    if(pinNum =="1234"){
        window.location.href = "home.html";
    }
    else{
      alert("Check your pin number");
      return;
    }
});


/*working for addMOney section */

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

/* log-out-btn functonality */

document.getElementById("LogoutBtn").addEventListener("click",function(){
      window.location.href = "login.html";
});

/* hidden & visiable functonality  */



/* cashout section */

document.getElementById("CashOutBtn").addEventListener("click",function(){
    const CashOUtmobileNum = getid("CashOUtmobileNum");
    const CashOutAmount = getid("CashOutAmount");
    const CashOutPinNum = getid("CashOutPinNum");

    console.log(CashOUtmobileNum);
    console.log(CashOutAmount);
    console.log(CashOutPinNum);
})
