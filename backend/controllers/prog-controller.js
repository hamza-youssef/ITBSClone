const progModel = require('../models/prog-model')


module.exports = {
    getByGroupe : (req,res) => {
        progModel.selectByGroupe(req.params.groupe, result =>{res.json(result)})
    },
    post : (req,res) => {
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login1."})
        progModel.insert(req.body, message =>{res.json({success : true, message})})
    },
    put : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        progModel.update(req.params.id,req.body, result =>{res.json({success : true, result})})
    },
    delete : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        progModel.delete(req.params.id, result =>{res.json({success : true, result})})
    }
}

