var model =require("../model/storeModel")
var queries = require("../db/queries")
exports.getStoresList = (req,res)=>{

    getStoresListQuery =queries.quriesList.GET_STORE_LIST_QUERY

    return res.status(200).send("JSON.stringify(values)")
}

exports.createStore = (req,res)=>{

}


exports.updateStore = (req,res)=>{

}


exports.deleteStore = (req,res)=>{

return res.status(202).send("Note Deleted")
    
}

