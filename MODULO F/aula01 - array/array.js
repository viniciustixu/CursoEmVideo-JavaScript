let dados = [0, 7, 2, 4, 3, 9]

dados.push(1) // Adiciona um elemento no array
dados.sort() // organiza o array de uma forma não muito eficiente




for (let pos = 0; pos < dados.length; pos++) {
    console.log(`A posição ${pos} do array contém ${dados[pos]}`)
}
