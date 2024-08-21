const form = document.getElementById('form-number');
const mensagemSucesso = document.getElementById('success-message');
const numeroA = document.getElementById('number-a');
const numeroB = document.getElementById('number-b');
let formEValido = false;

function validaNumero(numeroA, numeroB){
    return numeroB > numeroA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const mensagemSucesso = `Números enviados com sucesso!`;

    formEValido = validaNumero(numeroA.value,numeroB.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else {
        numeroB.style.border = '3px solid red'
        document.querySelector('.error-message').style.display = 'block';
    }
})

numeroB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNumero(numeroA.value,numeroB.value);

    if (!formEValido) {
        numeroB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numeroB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})
