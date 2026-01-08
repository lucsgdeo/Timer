const timer = document.querySelector('#timer')
const inciarBtn = document.querySelector('#inciar');
const pausarBtn = document.querySelector('#pausar');
const zerarBtn = document.querySelector('#zerar');
let segundos = 0, intervalo;

document.addEventListener('click', e => {
    if (e.target.id === 'inciar') {
        inciarBtn.disabled = true;
        intervalo = setInterval(() => {
            segundos++
            setRelogio(segundos)
        }, 1000)
    }

    if (e.target.id === 'pausar') {
        timer.classList.add('pausado')
        inciarBtn.disabled = false;
        clearInterval(intervalo)
    }

    if (e.target.id === 'zerar') {
        inciarBtn.disabled = false;
        clearInterval(intervalo)
        segundos = 0
        setRelogio(segundos)
    }
});

setRelogio(segundos)

function gerarHora(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

function setRelogio(segundos) {
    timer.classList.remove('pausado')
    timer.innerHTML = gerarHora(segundos)
}