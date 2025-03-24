function calcular(){
    //recupera o valor da ação social digitado
    //declaração variável sem tipo
     let acaoSocial = document.getElementById("acaoSocial").value
     //recupera o valor da homenagem digitado
     let Homenagem = document.getElementById("Homenagem").value
     // vamos somar os valores
     let soma = Number(acaoSocial) + Number(Homenagem)
     alert(soma)
}