const timer = document.querySelector('#timer')
const inciarBtn = document.querySelector('#inciar');
const pausarBtn = document.querySelector('#pausar');
const zerarBtn = document.querySelector('#zerar');
let segundos = 0, intervalo;

inciarBtn.addEventListener('click', () => {
    inciarBtn.disabled = true;
    intervalo = setInterval(() => {
        segundos++
        setRelogio(segundos)
    }, 1000)
});

pausarBtn.addEventListener('click', () => {
    timer.classList.add('pausado')
    inciarBtn.disabled = false;
    clearInterval(intervalo)
});

zerarBtn.addEventListener('click', () => {
    inciarBtn.disabled = false;
    clearInterval(intervalo)
    segundos = 0
    setRelogio(segundos)
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