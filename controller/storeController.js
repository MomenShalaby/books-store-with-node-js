var model = require("../model/storeModel")
var queries = require("../db/queries")
const utility = require("../Util/utility")
const dbConnection = require("../db/connection")

exports.getStoresList = async (req, res) => {

    try {

        var STORE_LIST_QUERY = queries.quriesList.GET_STORE_LIST_QUERY;
        var result = await dbConnection.dbQuery(STORE_LIST_QUERY);
        return res.status(200).send(JSON.stringify(result))


    } catch (error) {

        return res.status(500).send({ error: 'failed to list store' })
    }



}

exports.createStore = async (req, res) => {
    try {

        var STORE_NAME = req.body.storeName
        var STORE_ADDRESS = req.body.storeAddress

        let STORE_CODE = utility.generateStoreCode();

        var CREATED_BY = "admin"

        var CREATED_ON = new Date()

        if (!STORE_NAME || !STORE_ADDRESS) {
            return res.status(500).send({ error: 'Name and Address are required.' })
        }

        var values = [STORE_NAME, STORE_CODE, STORE_ADDRESS, CREATED_ON, CREATED_BY]

        var CREATE_STORE_QUERY = queries.quriesList.CREATE_STORE_QUERY;
        console.log(CREATE_STORE_QUERY)
        var result = await dbConnection.dbQuery(CREATE_STORE_QUERY,values)

        console.log(result)

        return res.status(201).send(JSON.stringify(result))

    }
    catch (error) {
        return res.status(500).send({ error: 'failed to list store' })
    }
}


exports.updateStore = (req, res) => {

}


exports.deleteStore = (req, res) => {

    return res.status(202).send("Note Deleted")

}

