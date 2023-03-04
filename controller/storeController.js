var generator = require("../Util/generator")
var memStorage = require("../Util/memoryStorage")
var model =require("../model/storeModel")

exports.getAllStore = (req,res)=>{

    return res.status(200).send("JSON.stringify(values)")
}

exports.saveStore = (req,res)=>{

}


exports.updateStore = (req,res)=>{

}


exports.deleteStore = (req,res)=>{

return res.status(202).send("Note Deleted")
    
}

