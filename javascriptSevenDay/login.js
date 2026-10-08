

 document.getElementById("loginBtn").addEventListener("click" ,function(){
     let MobileNumInput = document.getElementById("inputMobileNum");

     let ContactNum = MobileNumInput.value;
          
     let PinInput = document.getElementById("Pin-input");

     let PinValue = PinInput.value;

     if(ContactNum=="01962747832" && PinValue=="1234"){
       window.location.assign("./home.html");
     }else{
        alert("Somethings went wrong please check your Pin and Number");
        return;
     }
    
})
