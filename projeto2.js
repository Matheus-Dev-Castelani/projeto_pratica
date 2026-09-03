function temperatura(temp) {
   if (temp >= 15 && temp <= 25) {
      return 'boa'
   }
   else if (temp >= 26 && temp <= 31) {

      return 'media'

   }
   else if (temp > 31 && temp <= 36) {

      return 'qualidade ruim'

   }
   else if (temp < 15) {

      return 'bom dmaise'

   }
   else if (temp > 36) {

      return 'lixo'
   }
}


function Umidade(umi) {
   if (umi < 30) {
      return "muito seco"
   }
   else if (umi >= 30 && umi <= 39) {

      return "seco"
   }
   else if (umi >= 40 && umi <= 60) {
      return "umido"

   }
   else if (umi > 60) {
      return "muito umido"
   }

}

function particula(part) {
   if (part >= 0 && part <= 9) {

      return 'qualidade boa'
   }
   else if (part > 9 && part <= 25) {

      return "qualidade media"
   }

   else if (part > 25 && part <= 50) {

      return 'qualidade ruim'
   }
   else if (part > 50) {

      return 'qualidade muito ruim'
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



