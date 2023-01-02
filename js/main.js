let sum = document.getElementById('sum')
let mens = document.getElementById('mens')
let procent = document.getElementById('procent')
let calculate = document.getElementById('calculate')
let container = document.querySelector('.container')

calculate.addEventListener('click', function () {
    let div = document.createElement('div')
    div.className = 'answerBlockWrapper'

    if (sum.value == '' || mens.value == '' || procent.value == '') {
        document.querySelector('.answerBlockWrapper').remove()
        div.innerHTML = `<div class='answerBlock'> 
            Заполните все поля!!!
        </div>`
        container.appendChild(div)

    } else {
        let itog = 0
        itog = (sum.value * (procent.value / 100)) / mens.value
        document.querySelector('.answerBlockWrapper').remove()
        div.innerHTML = `<div class='answerBlock'> 
            Чаевые на одного человека составляют ${itog.toFixed(2)}$
         </div>`
        container.appendChild(div)
    }

})
