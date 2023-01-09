let dados = [0, 7, 2, 4, 3, 9, 8]

dados.push(1) // Adiciona um elemento no array
dados.sort() // organiza o array de uma forma não muito eficiente



for (let pos = 0; pos < dados.length; pos++) {
    console.log(`A posição ${pos} do array contém ${dados[pos]}`)
}



let n8 = dados.indexOf(8)
if (n8 == -1) { // Se não for encontrado o valor no array será retornado '' -1 ''
    console.log(`O numero 8 não está presente no seu array`)
} else {
    console.log(`O numero 8 está na posição ${n8} do array `)
}
