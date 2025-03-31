function calcular() {
    let soma = 0

    //recupera o valor da Ação Social digitado
    //declara uma variavel sem tipo
    let acaoSocial = document.getElementById("acaoSocial").value
    soma = soma + Number(acaoSocial)

    let Homenagem = document.getElementById("Homenagem").value
    soma = soma + Number(Homenagem)

    let kitAlimentacao = document.getElementById("kitAlimentacao").value
    soma = soma + (30 * Number(kitAlimentacao))

    let lataSuplemento = document.getElementById("lataSuplemento").value
    soma = soma + (15 * Number(lataSuplemento))

    let pctArroz5 = document.getElementById("pctArroz5").value
    soma = soma + (5 * Number(pctArroz5))

    let pctArroz1 = document.getElementById("pctArroz1").value
    soma = soma + Number(pctArroz1)

    let feijao2 = document.getElementById("feijao2").value
    soma = soma + (2 * Number(feijao2))

    let feijao1 = document.getElementById("feijao1").value
    soma = soma + Number(feijao1)

    let macarrao = document.getElementById("macarrao").value
    soma = soma + (0.5 * Number(macarrao))

    let oleo = document.getElementById("oleo").value
    soma = soma + Number(oleo)

    let Leite = document.getElementById("Leite").value
    soma = soma + (2 * Number(Leite))

    //devolve o resultado para o html
    document.getElementById("soma").innerHTML = soma.toFixed(2)
}