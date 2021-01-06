const Exames = require('../models/exames')

exports.testar = (req, res) => {
    res.json({ message: 'Teste de retorno' });
};

// Mostrar todos os Exames
exports.detailsAll = async (req,res) => {

    try {
        const exame = await Exames.find()
        res.json(exame)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}
//Encontra o exame pelo Id
exports.details = async (req, res) => {
    await Exames.findById(req.params.id, (error, exame) => {
        if (error) console.error(error)
        res.json(exame)
    })
};

//Cria um novo Exame
exports.create = async(req,res) => {

    const exame = new Exames({

        nome: req.body.nome,
        tipo: req.body.tipo,
        status: req.body.status,

    })

    try {
        const newExame = await exame.save()
        res.status(201).json(newExame)
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}

exports.update = async (req,res) => {
    
    console.log(req.body);
    await Exames.findOneAndUpdate(req.params.id, {
        $set:{
            nome: req.body.nome,
            tipo: req.body.tipo,
            status: req.body.status,    
        }
    },{new: true}, (error, exame) => {
        if(error) console.error(error)
        res.json(exame)
    })

}
exports.delete = async(req,res) => {

    await Exames.findOneAndRemove(req.params.id , (error) => {
        if(error) console.error(error)
        res.json({message: "Exame Deletado"})
    })

}

