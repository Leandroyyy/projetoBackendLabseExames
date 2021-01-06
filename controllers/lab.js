const Labs = require('../models/labs')
const Exames = require('../models/exames')

//Monstrar todos os Labs
exports.detailsAll = async (req,res) => {
    try {
        const lab = await Labs.find()
        res.json(lab)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

//Monstrar somente Lab procurado pelo Id
exports.details = async(req,res) => {

    await Labs.findById(req.params.id, (error, lab) => {
        if (error) console.error(error)
        res.json(lab)
    })

}
//Cria um Lab
exports.create = async(req,res) => {

    const labo = new Labs({       
            nome: req.body.nome,
            endereco: req.body.endereco,
            status: req.body.status,
            exames: req.body.exames  
    })

    try {
        const newLab = await labo.save()
        res.status(201).json(newLab)
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
//Altera as informaçoes de um Lab
exports.alterar = async(req,res) => {
    
    await Labs.findOneAndUpdate(req.params.id, {

        $set:
        {
            nome: req.body.nome,
            endereco: req.body.endereco,
            status: req.body.status,
        }
    },{ new: true }, (error, lab) => {
        if (error) console.error(error)
        res.json(lab)
    })
};
//Deleta um Lab
exports.deletar = async (req,res) => {

    await Labs.findOneAndRemove(req.params.id, (error, lab) => {
        if (error) console.error(error)
        res.json({ message: 'Laboratorio foi deletado' });
    })

};

//Busca Id do Exame 
exports.alterarExame = async (req,res) => {

    Exames.findById(req.body.exameid).then(result => {
        if (!result) return res.status(404).send('Exame não encontrado')
        Labs.findOneAndUpdate(req.params.id, {
            $set:
            {
                exames: req.body
            }
        }, { new: true }, (error, exame) => {
            if (error) console.error(error)
            res.json(exame)
        })
    })

};

