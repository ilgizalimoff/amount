let sum = document.getElementById('sum')
let mens = document.getElementById('mens')
let procent = document.getElementById('procent')
let calculate = document.getElementById('calculate')

calculate.addEventListener('click', function(){
    let itog = 0
    itog = (sum.value*(procent.value/100))/mens.value
    console.log(itog);
})
