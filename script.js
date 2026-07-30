const sortearNumero = document.querySelector('.sortear-numero')

function generateNumber() {
    const numberMin = Math.ceil(document.querySelector('.numero-min').value)
    const numberMax = Math.floor(document.querySelector('.numero-max').value)

    if (numberMin >= numberMax) {
        alert('O primeiro valor tem que ser menor que o segundo')
    }
    else {
        const result = Math.floor(Math.random() * (numberMax - numberMin + 1) + numberMin);

        alert(result)
    }
}





sortearNumero.addEventListener('click', generateNumber)