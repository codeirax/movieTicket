// Store the wallet amount to your local storage with key "amount"

 function addToWallet(){
     let userAmount = document.querySelector("#amount").value;
    //  console.log(userAmount);
    document.querySelector("#wallet").innerText = userAmount;
    localStorage.setItem("amount", userAmount);
 }

