document.get


const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const p_result = document.querySelector('#result')


function btnOnclick() {
    
    const result_suma = parseInt(input1.value) + parseInt(input2.value)
    p_result.innerhtml = "El Resultado es: " + result_suma
}

