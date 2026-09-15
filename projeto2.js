function temperatura(temp) {
   if (temp >= 15 && temp <= 25) {
      return 'boa'
      
   }
   else if (temp >= 26 && temp <= 31) {

      return 'media'

   }
   else if (temp > 31 && temp <= 36) {

      return 'ruim'

   }
   else if (temp < 15) {

      return 'boa'
   }
   else if (temp > 36) {

      return 'ruim'
   }
   

}


function Umidade(umi) {
   if (umi < 30) {
      return "ruim"
   }
   else if (umi >= 30 && umi <= 39) {

      return "ruim"
   }
   else if (umi >= 40 && umi <= 60) {
      return "media"

   }
   else if (umi > 60) {
      return "boa"
   }
   

}

function particula(part) {
   if (part >= 0 && part <= 9) {

      return 'boa'
   }
   else if (part > 9 && part <= 25) {

      return "media"
   }

   else if (part > 25 && part <= 50) {

      return 'ruim'
   }
   else if (part > 50) {

      return 'ruim'
   }
   //tentativa de fazer o calculo para o resultado//
   


}


let valores=[]

function calculo(temperaturaresult,umidaderesult,particulasresult) {
//codigo para transformar os valores de texto em pontos//
 if(temperaturaresult =='boa'){
     valores[0]=3
 }
 else if(temperaturaresult=='media'){
     valores[0]=2
 }
 else if(temperaturaresult=='ruim'){
    valores[0]= -1
 }
 
//codigo para transformar os valores de texto em pontos//
 if(umidaderesult=='boa'){
    valores[1]=3
 }
 else if(umidaderesult=='media'){
    valores[1]= 2
 }
 else if(umidaderesult=='ruim'){
    valores[1]=-1
 }

 if(particulasresult=='boa'){
  valores[2]=3
 }
 else if(particulasresult=='media'){
     valores[2]=2
 }
 else if(particulasresult=='ruim'){
   valores[2]= -1
 }
 
 //calculo das qualidades//
  qualidade_final=valores[0]+valores[1]+valores[2]

if(qualidade_final>=5) {
   return qualidade_final=' a qualidade do ar atualmente está:  boa'
}
else if(qualidade_final>=3 && qualidade_final<=4){
  return qualidade_final=' a qualidade do ar atualmente está:  média'
}
else if(qualidade_final<4){
  return qualidade_final=' a qualidade do ar atualmente está:  ruim'
}



 }

  
function medicao() {
   //pegando o valor do elemento no html e implementando na variavel no js//
   let temp = Number(document.getElementById("Temperatura").value)
   let umi = Number(document.getElementById("Umidade").value)
   let part = Number(document.getElementById("Particula").value)


   //dando o valor da função para a variavel//
   let temperaturaresult = temperatura(temp)
   let umidaderesult = Umidade(umi)
   let particulasresult = particula(part)
   let qualidade_final=calculo(temperaturaresult,umidaderesult,particulasresult)
     
   //localStorag.setItem guarda  o valor de uma variavel em um espaço nomeavel, ex: "valor_tela",qualidade_final. O valor tela é o nome, a qualidade_final é a variavel cujo queremos guardar o valor no espaço nomeavel.
    localStorage.setItem("valor_tela",qualidade_final)

    //oque vai aparecer no terminal//
   console.log('temperatura:', temperaturaresult)
   console.log('umidade:', umidaderesult)
   console.log('particulas:', particulasresult)
   console.log('a qualidade é',qualidade_final)
}
function mostrar(){
   //resultado: variavel que vai receber o valor guardado
   let resultado=

   //localstorege.getItem serve para entregar o valor que foi guardado
    localStorage.getItem("valor_tela");

     //a variavel div pega o valor do elemento que possui o id "resultado"

    let div=document.getElementById('resultado');

     div.textContent=resultado
   
}






// let temp= document.getElementById ("Temperatura").value : pega o valor que foi adicionado ao imput com id "Temperatura" e esse valor é o da variavel temp que foi criada//
//  temp.onclick= function(){ console.log('qualidade boa')} : issso basicamente significa, a cada click no botao temp a palavra "qualidade boa " vai aparecer, porem somente se passar no parametro do if//
//  .onclick : propriedade usada em inputs e botoes que significa " a cada click algo vai rolar"//
// function(){ console.log('qualidade boa')} : isso é uma função, ou seja quando a sentença da função for cumprida  algo vai acontecer,no caso vai ser o "console.log"
// document.getElementById é usando para pegar o valor do input usado no html conectado //



