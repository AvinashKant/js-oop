function balance (){
    let balance = 0;
    return {
        getAmount:  () => balance,
        deposit:function (amount){
            balance += amount;
            return balance;
        }
    }
}
let account = balance();
console.log(account.getAmount());
console.log(account.deposit(500));
console.log(account.getAmount());