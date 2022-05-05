const groupeModel = require('../models/groupe-model')


module.exports = {
    get : (req,res) => {
        groupeModel.selectAll((result)=>{res.json(result)})
    },
    getById : (req,res)=>{
        groupeModel.selectById(req.params.id, result =>{res.json(result)})
    },
    post : (req,res) => {
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        groupeModel.insert(req.body, message =>{res.json({success : true, message})})
    },
    put : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        groupeModel.update(req.params.id,req.body, result =>{res.json({success : true, result})})
    },
    delete : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        groupeModel.delete(req.params.id, result =>{res.json({success : true, result})})
    }
}

