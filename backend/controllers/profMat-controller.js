const profMatModel = require('../models/profMat-model')


module.exports = {
    getByGroupe  : (req,res) => {
        profMatModel.selectByGroupe(req.params.groupe, result =>{res.json(result)})
    },
    getByProf : (req,res) => {
        profMatModel.selectByProf(req.params.id, result =>{res.json(result)})
    },
    post : (req,res) => {
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login1."})
        profMatModel.insert(req.body, message =>{res.json({success : true, message})})
    },
    put : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        profMatModel.update(req.params.id,req.body, result =>{res.json({success : true, result})})
    },
    delete : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        profMatModel.delete(req.params.id, result =>{res.json({success : true, result})})
    }
}

