



function Codificar(){
var dado=document.getElementById('Area-Text').value
    
    let textoSemAcento= dado.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    let textoDivido=textoSemAcento.split('')
    let data={
        texto:textoDivido
    }
    console.log(data)

    // const response=await fetch('http://localhost:3000/api/code')

}
