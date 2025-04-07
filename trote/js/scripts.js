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
    }
    else if (equipe == "Preta"){
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
    }
    else if(equipe == "Roxa"){
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
    }
    else if(equipe == "Verde"){
        //equipe é verde
        if(Number (kitAlimentacao)>=88 && (lataSuplemento)>=44){
            pontoskitSuplemento = 5000 + ((kitAlimentacao-88)*30) + ((lataSuplemento-44)*15)
        }
        else if(kitAlimentacao>=70 && lataSuplemento>=35){
            pontoskitSuplemento = 4000 + ((kitAlimentacao-70)*30) + ((lataSuplemento-35)*15)
        }
        else if(kitAlimentacao>=44 && lataSuplemento>=22){
            pontoskitSuplemento = 2500 + ((kitAlimentacao-44)*30) + ((lataSuplemento-22)*15)
        }
        else if(kitAlimentacao>=18 && lataSuplemento>=9){
            pontoskitSuplemento = 1000 + ((kitAlimentacao-18)*30) + ((lataSuplemento-9)*15)
        }
    }
    else{ //assumo que a equipe é vermelha
        //equipe é vermelha
        if(Number (kitAlimentacao)>= 93 && (lataSuplemento)>=47){
            pontoskitSuplemento = 5000 + ((kitAlimentacao-93)*30) + ((lataSuplemento-47)*15)
        }
        else if(kitAlimentacao>=74 && lataSuplemento>=38){
            pontoskitSuplemento = 4000 + ((kitAlimentacao-74)*30) + ((lataSuplemento-38)*15)
        }
        else if(kitAlimentacao>=47 && lataSuplemento>=24){
            pontoskitSuplemento = 2500 + ((kitAlimentacao-47)*30) + ((lataSuplemento-24)*15)
        }
        else if(kitAlimentacao>=19 && lataSuplemento>=9){
            pontoskitSuplemento = 1000 + ((kitAlimentacao-19)*30) + ((lataSuplemento-9)*15)
        }
    }
   
    soma = soma + pontoskitSuplemento

    let sangue = Number(document.getElementById("sangue").value)
    let pontosangue = 0 //guarda a pontuação de doação de sangue
    if(equipe == "Laranja"){
        if(Number (sangue)>=49){
            pontosangue = 2500 + ((sangue-49)*20)
        }
        else if (sangue<49){
            pontosangue = sangue*20
        }
    }
    else if(equipe == "Preta"){
        if(Number(sangue)>=52){
            pontosangue = 2500 + ((sangue-52)*20)
        }
        else if(sangue<52){
            pontosangue = sangue *20
        }
    }
    else if(equipe == "Roxa"){
        if(Number(sangue)>= 51){
            pontosangue = 2500 + ((sangue-51)*20)
        }
        else if(sangue<51){
            pontosangue = sangue*20
        }
    }
    else if(equipe == "Verde"){
        if(Number(sangue)>=44){
            pontosangue = 2500 + ((sangue-44)*20)
        }
        else if(sangue<44){
            pontosangue = sangue*20
        }
    }
    else{ //assumo que a equipe é vermelha
        if(Number(sangue)>=47){
            pontosangue = 2500 + ((sangue-47)*20)
        }
        else if(sangue<47){
            pontosangue = sangue *20
        }
    }
    soma = soma + pontosangue

    
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
    
    let registro = document.getElementById("registro").value
    soma = soma + Number(registro)

    let mascote = document.getElementById("Mascote").value
    soma = soma + Number(mascote)

    let Caracterização = document.getElementById("Caracterização").value
    soma = soma + Number(Caracterização)

    let extra = document.getElementById("extra").value
    soma = soma + Number(extra)
    
    //devolve o resultado para o html
    document.getElementById("soma").innerHTML = soma.toFixed(2)
}