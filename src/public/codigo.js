// Traduzie codigo para texto

const Traduzir=async()=>{
  
var codigo =document.getElementById('Area-Text').value

var CodigoModificado = codigo.replace(/\s+/g, '');
var Total = null;

var text = [];
var res = null
let num = 8;
for (var i = 0; i < CodigoModificado.length; i++) {
  text.push(CodigoModificado[i])


  if (text.length === num) {
    text.push(CodigoModificado[i].replace(CodigoModificado[i],' '))


    num += 9;
  }

}

text.join('')
for(var i=0; i<text.length; i++) {
  if(i===','){
    text[i].replace(',','')
  }
}
let data=text.join('')
var total=data.split(' ')
// console.log(total)
var res=[]

for (let i = 0; i < total.length; i++) {
  
    res.push(total[i])
    res.splice(res.length,0,' ')
    
}
// console.log(res)



const response=await fetch('http://localhost:3000/api/text',{
  method:'POST',
  headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      codigo:res
    })
  });
  let result = await response.json();
  if(result.error){
      alert(result.message)
  }else{
      alert(result.message)
      let codigo=result.ListaCodigo
      let res=codigo.join('')
      // console.log(res)
      document.getElementById('Area-Code').innerHTML=res
  };
}