document.querySelector('.pokemon-quadro').addEventListener('click', clicouCharmander)
document.querySelector('.pokemon-quadro:nth-child(2)').addEventListener('click', clicouSquirtle)
document.querySelector('.pokemon-quadro:nth-child(3)').addEventListener('click', clicouBulbasaur)
document.getElementById('atk').addEventListener('click', clicouAtaque)
var pokemon = ''
var audioPrincipal = document.getElementById("musicaCombate");

function clicouCharmander() {
    document.body.style.display = 'none'
}

function clicouSquirtle() {
    document.body.style.display = 'none'
}

/* Seleção de pokemon */
function clicouBulbasaur() {
    document.querySelector('.container').style.display = 'none'
    document.getElementById('h1-temporario').style.display = 'none'
    var pokemon = 'bulbasaur'
    document.getElementById('combate').style.display = 'flex'
    audioPrincipal.play();
    audioPrincipal.volume = 0.3;
}

function clicouSquirtle() {
    document.querySelector('.container').style.display = 'none'
    document.getElementById('h1-temporario').style.display = 'none'
    var pokemon = 'squirtle'
    document.getElementById('combate').style.display = 'flex'
    document.querySelector('.pokemon-de-costas').src = '../imagens/squirtle-back.png';
    document.querySelector('.pokemon-de-costas').style.transform = 'scaleX(-1)';
    document.querySelector('#pokemon-back-combat').style.maxWidth = '360px';
    audioPrincipal.play();
    audioPrincipal.volume = 0.3;
}

function clicouCharmander() {
    document.querySelector('.container').style.display = 'none'
    document.getElementById('h1-temporario').style.display = 'none'
    var pokemon = 'charmander'
    document.getElementById('combate').style.display = 'flex'
    document.querySelector('.pokemon-de-costas').src = '../imagens/charmander-back.png';
    document.querySelector('.pokemon-de-costas').style.transform = 'scaleX(-1)';
    audioPrincipal.play();
    audioPrincipal.volume = 0.3;
}

/* UI */
function clicouAtaque() {
    document.getElementById('atk').innerText = 'Atacou'
}
