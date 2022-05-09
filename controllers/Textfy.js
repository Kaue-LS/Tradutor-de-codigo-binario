const api=require('../api/Codigo.json')
// let ts='b'
// let teste=api.find(e=>e.caractere===ts)
// console.log(teste.codigo)


// Traduz para texto
module.exports={
    async Textfy(req,res){
        let ListaCodigo=[]
        const {codigo}=req.body
        // console.log(codigo)
        if(!codigo){
            return res.status(400).json({
                error:true,
                message:'Erro na codificação',
            })
        }
        else{
        for (let i = 0; i < codigo.length; i++) {
            let fetch=api.find(e=>e.codigo===codigo[i])
            if(fetch===undefined){
                return res.status(404).json({
                    error:true,
                    message:'Código não encontrado',
                })
            }
        //   console.log(codigo)
        // console.log(fetch.caractere)
            
            ListaCodigo.push(fetch.caractere)

        }
        // console.log(ListaCodigo)
        return res.status(200).json({
            error:false,
            message:'Código traduzido com sucesso',
            ListaCodigo
        })
        }
    }
}