const stateModel = require("../models/StateModel");

const addState = async (req,res)=>{
    try{
        const savedState = await stateModel.create(req.body);
        res.status(201).json({
            message:"State added Successfuly",
            data:savedState
        });

    }catch(err){
        res.status(500).json({
            message:err,
        });
    }
};

const getAllStates = async (req,res)=>{
    try{
        const states = await stateModel.find();
        res.staus(200).json({
            message:"All States Fetched Successfully",
            data:sates
        })
     }catch(err){

        res.status(500).json({
            message:err
        })

     }
}

module.exports ={
    addState,
    getAllStates,
}