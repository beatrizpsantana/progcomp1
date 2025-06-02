function exe1(){
    let vet = []
    for(let i = 0; i < 6; i++){
        vet.push(Number(prompt(`Informe o ${i+1}º número`)))
    }
    let par = [], impar = []
    for(let i = 0; i < 6; i++){
        if(vet[i] % 2 == 0){
            par.push(vet[i])
        }
        else{
            impar.push(vet[i])
        }
    }
    alert(`Temos ${par.length} elementos pares: ${par}`)
    alert(`Temos ${impar.length} elementos impares: ${impar}`)
}

//ler um vetor de 10 elementos. Some 10 nos elementos de posição par.
// multiplique por 5 nos elementos de posição impar