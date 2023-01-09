var sala1 = ['Ana', 'João', 'Felipe', 'Pedro', 'Emilio', 'Karina', 'Flávio', 'Jeniffer']
var sala2 = ['Beatriz', 'Cassiano', 'Gilmar', 'Karen', 'Britney', 'Flávio', 'João']
var sala3 = ['Emilio', 'Pedro', 'Tião', 'Rebeca', 'Noah', 'Kleber', 'Tasio', 'Heleno']



function checar(n) {
    if (sala1.indexOf(n)) {
        console.log('O nome pesquisado foi encontrado na SALA 1')
    } else {
        console.log('O nome pesquisado não foi encontrado em nenhuma das salas')
    }
}

console.log(checar('asdasd'))