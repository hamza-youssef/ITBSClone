const examenModel = require('../models/examen-model')


module.exports = {
    get : (req,res) => {
        examenModel.selectAll((result)=>{res.json(result)})
    },
    getById : (req,res)=>{
        examenModel.selectById(req.params.id, result =>{res.json(result)})
    },
    post : (req,res) => {
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login1."})
        examenModel.insert(req.body, message =>{res.json({success : true, message})})
    },
    put : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        examenModel.update(req.params.id,req.body, result =>{res.json({success : true, result})})
    },
    delete : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        examenModel.delete(req.params.id, result =>{res.json({success : true, result})})
    }
}

