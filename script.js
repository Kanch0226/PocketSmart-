let balance=0;
function addExpense(){
 let a=document.getElementById('amount')?.value || 0;
 balance+=Number(a);
 document.getElementById('balance').innerText=balance;
}
