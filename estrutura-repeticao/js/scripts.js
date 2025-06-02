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

function exe3(){
    let participante = 1
    let idade
    let etaria1 = 0, etaria2=0, etaria3=0, etaria4=0, etaria5=0

    while(participante <= 8){
        idade = Number(prompt(`Informe sua idade (Participante ${participante})`))
        if(idade>=0 && idade <= 15){
            etaria1++
        }
        else if(idade >= 16 && idade <=30){
            etaria2++
        }
        else if(idade >= 31 && idade <= 45){
            etaria3++
        }
        else if(idade >= 46 && idade <= 60){
            etaria4++
        }
        else if(idade >= 61 && idade <= 130){
            etaria5++
        }
        else{
            alert(`Idade Inválida`)
            continue
        }  
        participante++
    }
    let porcentagem1 = etaria1 * 12.5
    let porcentagem2 = etaria5 * 12.5
    alert(`A quantidade de pessoas em cada faixa etária é:\n1ª Faixa: ${etaria1}\n2ª Faixa: ${etaria2}\n3ª Faixa: ${etaria3}\n4ª Faixa: ${etaria4}\n5ª Faixa: ${etaria5}
        \nA porcentagem de pessoas na 1ª Faixa é ${porcentagem1}%\nPorcentagem de pessoas na 5ª Faixa é ${porcentagem2}%`)
}

function exe1 (){
    let a, b, c, d, aux
    let grupo=1
    while(grupo<=5){
        let conta =1
        a = Number(prompt(`Informe o valor de A`))
        b = Number(prompt(`Informe o valor de B`))
        c = Number(prompt(`Informe o valor de C`))
        d =  Number(prompt(`Informe o valor de D`))

        while(conta <= 3){
            if(a>b){
                aux=a; a = b; b=aux
            }
            if(b>c){
                aux=b; b=c; c=aux
            }
            if(c>d){
                aux=c; c=d, d=aux 
            }
            conta++
        }
        alert(`Ordem crescente ${a} ${b} ${c} ${d}`)
        alert(`Ordem decrescente ${d} ${c} ${b} ${a}`)
        grupo++
    }
    
}
function exe2(){
    let preço = 5
    let quantidade = 120
    let lucro
    let aux = ""
    let maiorl = 0, quantml = 0, preçoml = 0
    const despesa = 200
    while(preço >= 1){
        lucro = preço * quantidade - despesa
        if(lucro > maiorl){
            maiorl = lucro
            preçoml = preço
            quantml = quantidade
        }
        aux = aux + "\n" + (`Preço: ${preço} Quantidade: ${quantidade} Despesa: ${despesa} Lucro: ${lucro}`)
        preço = preço - 0.5
        quantidade = quantidade + 26
    }
    alert(aux)
    alert(`Maior lucro: ${maiorl} com preço ${preçoml} e quantidade de ${quantml}`)
}

function exe4(){
    let valor
    let multiplo = 1
    let resultado
    let aux = ""

    valor = Number(prompt(`Informe o número de deseja multiplicar: `))

    while(multiplo <= 10){
        resultado = multiplo * valor 

        aux = aux + "\n" + (`${valor} X ${multiplo} = ${resultado}`)
        multiplo++
    }

    alert(`Tabuada do ${valor}`)
    alert(aux)
}

function exe5(){
    let valor = 1
    let multiplo = 1
    let resultado
    let aux = ""

    while(valor <= 10){
       
        while(multiplo <= 10){
            resultado = multiplo * valor 
            aux = aux + "\n" + (`${valor} X ${multiplo} = ${resultado}`)
            multiplo++
        }
        
        multiplo = multiplo - 10
        valor++
    }

    console.log(aux)
}

function exe6(){
    let p = 0
    let v = 0
    let valor = 0
    let venda = 1
    let codigo

    for(venda = 1; venda <= 5; venda++){
        do{valor = Number(prompt(`Informe o valor da compra`))}
        while(valor < 0)
        do{
        codigo = prompt(`Informe o código V (à vista) P (à prazo)`).toUpperCase()
        }
        while(codigo != "V" && codigo != "P")
        if(codigo == "P"){
            p = p + valor
        } 
        else{
            v = v + valor
        }
    }

    alert(`O valor total de compras foi: ${p+v}\nCompras a prazo: ${p}\nCompras a vista: ${v}\nValor total de primeiras parcelas: ${p/3}`)
}

function exe7(){
    let idade=0, peso=0, altura=0, pessoa=0
    let anos = 0 , somaAltura = 0, quantIdade1020 = 0, quantpeso40 = 0

    for(pessoa =1; pessoa <= 5; pessoa++){
        do{idade = Number(prompt(`Informe sua idade: `))}
        while(idade < 0)
        do{peso = Number(prompt(`Informe seu peso: `))}
        while(peso < 0)
        do{altura = Number(prompt(`Informe sua altura: `))}
        while(altura<0)

        if(idade > 50){
            anos++
        }
        if(idade >= 10 && idade <= 20){
            somaAltura = somaAltura + altura
            quantIdade1020++
        }
        if(peso < 40){
            quantpeso40++
        }
    }
    alert(`Item 1: ${anos}\nItem 2: ${somaAltura / quantIdade1020}\nItem 3: ${quantpeso40 / 5 * 100}`)
}