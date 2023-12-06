console.log("O Ano Novo Está Chegando!")

let cantora = "Mariah Carey"

let idade = 54

let ano = 2023

let nascimento = ano - idade
console.log(`${nascimento}`)

let quartaFeira = true 
console.log(`${quartaFeira}`)

if(idade => 18){
    console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey")
} else {
    console.log("Sinto muito, mas assistirá da tv globo")
}

let mes = "Agosto"

if(mes === "Dezembro" || mes === "Agosto" || mes === "Junho"){
    console.log(`Uma ou mais opções estão corretas`)
} else {
    console.log(`Algo de errado não está certo, o mês digitado foi o mês de ${mes}`)
}