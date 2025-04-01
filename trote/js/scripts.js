function calcular() {
    let soma = 0

    //recupera o valor da Ação Social digitado
    //declara uma variavel sem tipo
    let acaoSocial = document.getElementById("acaoSocial").value
    soma = soma + Number(acaoSocial)

    let Homenagem = document.getElementById("Homenagem").value
    soma = soma + Number(Homenagem)

    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value) 
    let lataSuplemento = Number(document.getElementById("lataSuplemento").value)
    //recupera a cor da equipe
    let equipe = document.getElementById("equipe").value
    let pontoskitSuplemento = 0 //guarda a pontuação de kit
    if (equipe == "Laranja"){
        //equipe é laranja
        if(Number (kitAlimentacao)>= 97 && (lataSuplemento)>=49){
            pontoskitSuplemento = 5000 + ((kitAlimentacao-97) * 30) + ((lataSuplemento - 49)* 15)
        }
        else if (kitAlimentacao >= 78 && lataSuplemento>=39){
            pontoskitSuplemento = 4000 + ((kitAlimentacao - 78) * 30) + ((lataSuplemento - 39)*15)
        }
        else if(kitAlimentacao >= 49 && lataSuplemento >= 25){
            pontoskitSuplemento = 2500 + ((kitAlimentacao - 49) * 30) + ((lataSuplemento-25)*15)
        }
        else if(kitAlimentacao >= 19 && lataSuplemento>=10){
            pontoskitSuplemento = 1000 + ((kitAlimentacao) * 30) + ((lataSuplemento-10)*15)
        }
        else if(kitAlimentacao < 19 && lataSuplemento<10){
            pontoskitSuplemento = kitAlimentacao * 30 + lataSuplemento*15
        }
    }
    if (equipe == "Preta"){
        //equipe é preta
        if(Number (kitAlimentacao)>= 103 && (lataSuplemento)>=52){
            pontoskitSuplemento = 5000 + ((kitAlimentacao - 103)*30) + ((lataSuplemento-52)*15)
        }
        else if(kitAlimentacao >= 82 && lataSuplemento >= 42){
            pontoskitSuplemento = 4000 + ((kitAlimentacao - 82)*30) + ((lataSuplemento-42)*15)
        }
        else if(kitAlimentacao >=52 && lataSuplemento>= 26){
            pontoskitSuplemento = 2500 + ((kitAlimentacao - 52)*30) + ((lataSuplemento-26)*15)
        }
        else if(kitAlimentacao >=21 && lataSuplemento>= 10){
            pontoskitSuplemento = 1000 + ((kitAlimentacao - 21)*30) + ((lataSuplemento-10)*15)
        }
        else if(kitAlimentacao <21 && lataSuplemento<10){
            pontoskitSuplemento = kitAlimentacao * 30 + lataSuplemento*15
        }
    }
    if(equipe == "Roxa"){
        //equipe é Roxa
        if(Number (kitAlimentacao)>=102 && (lataSuplemento)>=51){
            pontoskitSuplemento = 5000 + ((kitAlimentacao-102)*30) + ((lataSuplemento-51)*15)
        }
        else if(kitAlimentacao>=82 && lataSuplemento>=41){
            pontoskitSuplemento = 4000 + ((kitAlimentacao-82)*30) + ((lataSuplemento-41)*15)
        }
        else if (kitAlimentacao>=51 && lataSuplemento>=26){
            pontoskitSuplemento = 2500 + ((kitAlimentacao-51)*30) + ((lataSuplemento-26)*15)
        }
        else if(kitAlimentacao>=20 && lataSuplemento>=10){
            pontoskitSuplemento = 1000 + ((kitAlimentacao-20)*30) + ((lataSuplemento-10)*15)
        }
        else if (kitAlimentacao<20 && lataSuplemento<10){
            pontoskitSuplemento = kitAlimentacao*30 + lataSuplemento*15
        }
    }
    alert(pontoskitSuplemento)
    soma = soma + pontoskitSuplemento

    
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