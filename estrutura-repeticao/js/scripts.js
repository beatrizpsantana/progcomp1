function exe0(){
    let nota //guarda as notas
    let conta = 1 //conta de 1 a 6
    let soma = 0
    while (conta <= 6){
        nota = Number(prompt(`Informe a nota ${conta}`))
        soma = soma + nota
        conta++ //conta + 1
    }
    
    //soma as notas
    //let soma = nota1 + nota2 + nota3 + nota4 + nota5 + nota6
    let media = soma / 6
    //mmostra o resultado
    alert(`A média das notas é ${media.toFixed(1)}`)
}

function pesquisaSatisfacao(){
    let nota //será informado pelo usuário
    let participante = 1 //varia de 1 a 10
    let soma = 0
    let satisfeitos = 0 //inicialmete, nenhum satisfeito
    let insatisfeito = 0 //inicialmente, nenhum insatisfeito
    while(participante <= 10){
        nota = Number(prompt(`Informe sua nota de satisfação (de 0 a 10) ${participante}`))
        if(nota >= 8 && nota<=10){
            satisfeitos++ //satisfeitos = satisfeitos + 1
        }
        else if(nota>= 0 && nota < 5){ 
            insatisfeito++ //insatisfeito = insatisfeito + 1
        }
        else if(nota<0 || nota>10){ // || é OU
            alert(`Nota Inválida`)
            continue //volta para o inicio sem incrementar participante 
        }
        participante++
        soma = soma + nota //soma += nota
    }
    let media = soma / 10
    alert(`A média das notas é ${media.toFixed(1)}\nTotal de Satisfeitos: ${satisfeitos}\nTotal de Insatisfeitos: ${insatisfeito}`)

} 