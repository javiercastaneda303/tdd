const separador = '//';  //¿tiene qeu ir en mayúscula?
const operador = '&&';

const operar = (input) => {
//console.log(`separator:${separador}<br> operator:${operador}`); //¿En qeu estoy fallando con `` ?
/* 
console.log('El valor del input es:' + input );
console.log('___ y el tipo es:' + typeof input);
console.log('#########################');
 */


 
  // tiene que haber alguan forma de preguntar por un rango 
  // en lugar de: (input>0 && input<10)  
  
/*   try {
    if (  input.length === 1 || (input>=0 && input<10)){
      
      console.log("el input es:" , input , "___________________________");  
      input = parseInt(input, 10);
      return (Number.isInteger(input))?input:0;
    }    
  } catch (error) {
    console.log(error);
    return 0;
  }

 */

  if ( input === null ){
    return null;
  }

  
    if (  input.length === 1  && !Number.isInteger(parseInt(input, 10)) ){      
      return 0;
    }    
  

  if ( input === 'null' ){
    return 'null';
  }
  if ( input === undefined){
    return undefined;
  }
  if ( isNaN(input)){
    return NaN ;
  }
  if (input.length === 0 ){
    return '';
  }
  if (  input.length === 1 || (input>=0 && input<10)){      
    console.log("el input es:" , input , "___________________________");  
    input = parseInt(input, 10);
    return (Number.isInteger(input))?input:0;
  }

}


module.exports = {
  separador,
  operador,
  operar
}
