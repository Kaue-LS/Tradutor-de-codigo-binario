const api=require('../api/Codigo.json')
// let ts='b'
// let teste=api.find(e=>e.caractere===ts)
// console.log(teste.codigo)
module.exports={
    async Codefy(req,res){
        let ListaCodigo=[]
        const {texto}=req.body
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
                break
            }
            ListaCodigo.push(fetch.codigo)
             console.log(typeof(texto[i]))

        }
        // console.log(ListaCodigo)
        return res.status(200).json({
            error:false,
            message:'Texto codificado com sucesso',
            ListaCodigo
        })
        }
    }
}