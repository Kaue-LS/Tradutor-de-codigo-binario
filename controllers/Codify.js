const { text } = require('express')
const api=require('../api/Codigo.json')
// let ts='b'
// let teste=api.find(e=>e.caractere===ts)
// console.log(teste.codigo)


// Transformar em codigo Binário

module.exports={
    async Codefy(req,res){
        let ListaCodigo=[]
        const {texto} = req.body
        let TamanhoDoBinario = 0;
        let Binario = "";
        let BinarioFinal = "";
        let DiferencaDeTamanho = 0;

        for(let i = 0; i < texto.length; i++){
            // Pega o binario do caractere
            Binario = texto.charCodeAt(i).toString(2);
            BinarioFinal = "";

            // Pega o tamanho dele
            TamanhoDoBinario = Binario.length;
            if(TamanhoDoBinario < 8){
                // Se o tamanho dele for menor que 8, coisa que pode aocntecer toda hora...
                // Pega a diferença
                DiferencaDeTamanho = 8 - TamanhoDoBinario;

                // Para cada caractere que falta, preencha com '0' o BinarioFinal
                for(let j = 0; j < DiferencaDeTamanho; j++){
                    BinarioFinal = BinarioFinal.concat("0");
                }
                // Binario final recebe o valor dele mais o binario do caractere
                BinarioFinal += Binario;

                // Manda isso para o array de código
                ListaCodigo.push(BinarioFinal);

                // 512 linhas de código de json é sacanagem mano

            }
        }

        return res.status(200).json({
            error:false,
            message:'Texto codificado com sucesso',
            ListaCodigo
        })

        /*
        // console.log(texto)
        if(!texto){
            return res.status(400).json({
                error:true,
                message:'Erro na codificação',
            })
        }
        else{
        for (let i = 0; i < texto.length; i++) {
            let fetch=api.find(e=>e.caractere===texto[i])
            if(fetch===undefined){
                return res.status(404).json({
                    error:true,
                    message:'Caractere não encontrado',
                })
            }
            ListaCodigo.push(fetch.codigo)
            //  console.log(typeof(texto[i]))

        }
        */

        // console.log(ListaCodigo)
       
    }
}