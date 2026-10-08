/* At first we make a machine for getValueFromId */

function getValueFromId(id){
     const input = document.getElementById(id);
     const value = input.value;
     return value;
}

/* We crete a function for getinnerText form current ammount */

function getBalence(){
    const balenceElement = document.getElementById("mainbalance");
    const balence = balenceElement.innerText;
    return Number(balence);
}

/* we crete a function for get new balence */

function setBalence(value){
    let blaenceEle = document.getElementById("mainbalance");
    blaenceEle.innerText = (value);
}

/* take id and hide all >only show id -item */

function showonly(id){
    const cashout = document.getElementById("cashOut");
    const addMoney = document.getElementById("AddMOney");

    /* hide all the element form ui */
    cashout.classList.add("hidden");
    addMoney.classList.add("hidden");
    /* visiable only selected item  */
    const visiable = document.getElementById(id);

    visiable.classList.remove("hidden");

}