document.querySelector('.pokemon-quadro').addEventListener('click', clicouCharmander)
document.querySelector('.pokemon-quadro:nth-child(2)').addEventListener('click', clicouSquirtle)
document.querySelector('.pokemon-quadro:nth-child(3)').addEventListener('click', clicouBulbasaur)
var pokemon = ''

function clicouCharmander() {
    document.body.style.display = 'none'
}

function clicouSquirtle() {
    document.body.style.display = 'none'
}

function clicouBulbasaur() {
    document.querySelector('.container').style.display = 'none'
    document.getElementById('h1-temporario').style.display = 'none'
    var pokemon = 'bulbasaur'
}
