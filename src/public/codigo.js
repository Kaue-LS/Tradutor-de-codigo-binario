// Encriptar para codigo binario

var codigo = "00100 010 00101010101 01010 101010 10101";
var CodigoModificado = codigo.replace(/\s+/g, '');
// /////////////////////////////////////////////////
var Total = null;

var text = [];
var res = null
let num = 5;

for (var i = 0; i <= CodigoModificado.length; i++) {
  text.push(CodigoModificado[i]);

  if (text.length === num) {
    // console.log( 'ola')
    text.push(CodigoModificado[i].replace(CodigoModificado[i],'-'))


    // console.log('ola ' +res)
    num += 6;
  }
  // else if(i<=CodigoModificado.length) {
  //   // text.push(CodigoModificado[i]);
  //   text.push(CodigoModificado[i].replace(CodigoModificado[i],CodigoModificado[i]+'-'))

  // }

}
// Total=text.toString()
// Total.split('-')
// window.document.getElementById('example').innerHTML=Total
// text.s
// console.log("Total:" +text.toString());
// console.log(res.splice(','))
text.join('')
for(var i=0; i<text.length; i++) {
  if(i===','){
    text[i].replace(',','')
  }
// console.log(text[i]);
}
res=text.join('').split('-')
// console.log(res)

//  window.document.getElementById('example').innerHTML=res