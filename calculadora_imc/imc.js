const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')
const calcular = document.querySelector('.calcular')
const tabelaImc = document.querySelector('.table-imc')


form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = imc(weight, height)
    const message = `Seu IMC é de ${result}`

    modalMessage.innerText = message
    modalWrapper.classList.add('open')
    tabelaImc.classList.add('open')
    
    if(result <=18.5){
     return document.querySelector('.table-imc').innerText = "Déficit de massa corporal. Busque um Nutricionista."
    }

    if(result <=24.9){
        return document.querySelector('.table-imc').innerText = "Massa corporal normal. Parabéns!"
       }


       if(result <=29.9){
        return document.querySelector('.table-imc').innerText = "Cuidado! Você está sobrepeso. Busque um Nutricionista."
       }

       if(result <=34.9){
        return document.querySelector('.table-imc').innerText = "Obesidade leve. Busque um Nutricionista."
       }

       if(result <=39.9){
        return document.querySelector('.table-imc').innerText = "Obesidade média. Busque um Nutricionista."
       }

       if(result >=40.0){
        return document.querySelector('.table-imc').innerText = "Obesidade mórbida. Busque um Nutricionista e cuide da sua saúde."
       }
}

calcular.addEventListener('click', function(){
    form()
})



modalBtnClose.addEventListener('click', function(){
    modalWrapper.classList.remove('open')
    tabelaImc.classList.remove('open')
     document.querySelector('#height').value = ""
     document.querySelector('#weight').value = ""
})


function imc(weight, height) {
    return (weight/((height/100)**2)).toFixed(2)


}





