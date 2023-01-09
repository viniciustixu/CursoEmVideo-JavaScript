let amigo = {nome:'José',
sexo: 'M',
peso: 85.4,
engordar(p){
    console.log(`${amigo.nome} Engordou`)
    this.peso += p
}}

amigo.engordar(1)
console.log(`${amigo.nome}(${amigo.sexo}) pesa ${amigo.peso}Kg`)
