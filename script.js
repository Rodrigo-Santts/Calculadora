
function calcular(tipo,valor){
   if(tipo === 'simbolos'){

      if(valor === 'c'){
         document.getElementById('resultado').value = ''
      }
      if(valor === '+'|| valor === '-'|| valor === '*'|| valor === '/'|| valor === '.'){
         document.getElementById('resultado').value += valor
      }
      if(valor === '='){
         let resultado_campo = document.getElementById('resultado').value
        document.getElementById('resultado').value = eval(resultado_campo)
         
      }
   }else if(tipo === 'valores_Numericos'){
      document.getElementById('resultado').value += valor;
   }
}