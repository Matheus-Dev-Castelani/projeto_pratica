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
   else if(temp='boa'){
      return 3
   }
   else if(temp='media'){
      return 2
   }
   else if(temp='ruim'){
      return 1
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
      return "medio"

   }
   else if (umi > 60) {
      return "bom"
   }
    else if(umi='bom'){
      return 3
   }
   else if(umi='medio'){
      return 2
   }
   else if(umi='ruim'){
      return 1
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
    else if(part='boa'){
      return 3
   }
   else if(part='medio'){
      return 2
   }
   else if(part='ruim'){
      return 1
   }


}
function medicao() {
   let temp = Number(document.getElementById("Temperatura").value)
   let umi = Number(document.getElementById("Umidade").value)
   let part = Number(document.getElementById("Particula").value)



   let temperaturaresult = temperatura(temp)
   let umidaderesult = Umidade(umi)
   let particulasresult = particula(part)

   console.log('temperatura:', temperaturaresult)
   console.log('umidade:', umidaderesult)
   console.log('particulas:', particulasresult)
}
function calculo() {
 //função utilizada para fazer o calculo das qualidades do projeto//
}


/*const valores = [];
function qualidade(n) {
   switch (n) {
      case 1: return "muito ruim";
      case 2: return "ruim";
      case 3: return "medio";
      case 4: return "bom";
      default: return "muito bom";
   }
}
for (let i = 0; i < 3; i++) {
   let valor = parseInt(prompt(`valor ${i + 1}: `));
   valores[i] = valor;
}
let total = 0;
for (let i = 0; i < valores.length; i++) {
   console.log(`valor ${i + 1}: ${qualidade(valores[i])}`);
   total += valores[i];
}
let avg = Math.ceil(total / valores.length);
console.log(`resultado final: ${qualidade(avg)}`);*/





// let temp= document.getElementById ("Temperatura").value : pega o valor que foi adicionado ao imput com id "Temperatura" e esse valor é o da variavel temp que foi criada//
//  temp.onclick= function(){ console.log('qualidade boa')} : issso basicamente significa, a cada click no botao temp a palavra "qualidade boa " vai aparecer, porem somente se passar no parametro do if//
//  .onclick : propriedade usada em inputs e botoes que significa " a cada click algo vai rolar"//
// function(){ console.log('qualidade boa')} : isso é uma função, ou seja quando a sentença da função for cumprida  algo vai acontecer,no caso vai ser o "console.log"
// document.getElementById é usando para pegar o valor do input usado no html conectado //



