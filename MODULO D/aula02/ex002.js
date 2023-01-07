var tempo = new Date()
var hora = 21
console.log(`Agora são exatamente ${hora} horas`)

if (hora > 12 && hora < 17) {
    console.log('Boa tarde')
} else if (hora > 18 && hora < 24) {
    console.log('Boa noite')
} else {
    console.log('Bom dia')
}
