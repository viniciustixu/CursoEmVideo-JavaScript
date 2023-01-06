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
    document.getElementById('combate').style.display = 'flex'
}

function clicouSquirtle() {
    document.querySelector('.container').style.display = 'none'
    document.getElementById('h1-temporario').style.display = 'none'
    var pokemon = 'squirtle'
    document.getElementById('combate').style.display = 'flex'
    document.querySelector('.pokemon-de-costas').src = '../imagens/squirtle-back.png';
    document.querySelector('.pokemon-de-costas').style.transform = 'scaleX(-1)';
    document.querySelector('#pokemon-back-combat').style.maxWidth = '360px';
}

function clicouCharmander() {
    document.querySelector('.container').style.display = 'none'
    document.getElementById('h1-temporario').style.display = 'none'
    var pokemon = 'charmander'
    document.getElementById('combate').style.display = 'flex'
    document.querySelector('.pokemon-de-costas').src = '../imagens/charmander-back.png';
    document.querySelector('.pokemon-de-costas').style.transform = 'scaleX(-1)';
}