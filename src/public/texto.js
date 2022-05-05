
// Converter texto para codigo binario


const Codificar=async()=>{
var dado=document.getElementById('Area-Text').value
    
    let textoSemAcento= dado.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    let textoDivido=textoSemAcento.split('')
    let data={
        texto:textoDivido
    }

    const response=await fetch('http://localhost:3000/api/code',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(data)
        });
        let result = await response.json();
        if(result.error){
            alert(result.message)
        }else{
            alert(result.message)
            let codigo=result.ListaCodigo
            let res=codigo.join('')
            console.log(res)
            document.getElementById('Area-Code').innerHTML=res
        };
            

}
