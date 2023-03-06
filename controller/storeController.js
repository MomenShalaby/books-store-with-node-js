var model = require("../model/storeModel")
var queries = require("../db/queries")
const utility = require("../Util/utility")
const dbConnection = require("../db/connection")

exports.getStoresList = async (req, res) => {

    try {

        var STORE_LIST_QUERY = queries.quriesList.GET_STORE_LIST_QUERY;
        var result = await dbConnection.dbQuery(STORE_LIST_QUERY);
        return res.status(200).send(JSON.stringify(result.rows))


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

        if (!STORE_NAME) {
            return res.status(500).send({ error: 'Name is required.' })
        }
        else if (!STORE_ADDRESS) {
            return res.status(500).send({ error: 'Address is required.' })

        }

        var values = [STORE_NAME, STORE_CODE, STORE_ADDRESS, CREATED_ON, CREATED_BY]

        var CREATE_STORE_QUERY = queries.quriesList.CREATE_STORE_QUERY;
        console.log(CREATE_STORE_QUERY)
        var result = await dbConnection.dbQuery(CREATE_STORE_QUERY, values)

        console.log(result)

        return res.status(201).send(STORE_NAME + " store is created successfully")

    }
    catch (error) {
        return res.status(500).send({ error: 'Failed to create store' })
    }
}


exports.updateStore = async (req, res) => {
    try {

        var STORE_NAME = req.body.STORE_NAME

        var STORE_ADDRESS = req.body.STORE_ADDRESS

        var STORE_ID = req.body.STORE_ID

        
            var DB_STORE_ID_query = queries.quriesList.GET_STORE_ID_QUERY

            var DB_STORE_ID = await dbConnection.dbQuery(DB_STORE_ID_query, [STORE_ID])

            console.log(DB_STORE_ID.rows[0].count)

            // if (!DB_STORE_ID) {
            //     return res.status(500).send(STORE_ID + " ID Not Found")

            // }
        
           
        


        var CREATED_BY = "admin"

        var CREATED_ON = new Date()

        if (!STORE_NAME) {
            return res.status(500).send({ error: 'Name is required.' })
        }
        else if (!STORE_ADDRESS) {
            return res.status(500).send({ error: 'Address is required.' })

        }
        if (DB_STORE_ID.rows[0].count == "0") {
            return res.status(500).send({ error: 'ID Doesnt exist' })
        }
        var values = [STORE_NAME, STORE_ADDRESS, CREATED_ON, CREATED_BY, STORE_ID]



        var UPDATE_STORE_QUERY = queries.quriesList.UPDATE_STORE_QUERY;

        var result = await dbConnection.dbQuery(UPDATE_STORE_QUERY, values)

        return res.status(201).send(" store is updated successfully")

    }
    catch (error) {
        return res.status(500).send({ error: 'Failed to Update store' })
    }

}


exports.deleteStore = async  (req, res) => {


    try {
        var STORE_ID = req.body.STORE_ID

        var DB_STORE_ID_query = queries.quriesList.GET_STORE_ID_QUERY

        var DB_STORE_ID = await dbConnection.dbQuery(DB_STORE_ID_query, [STORE_ID])


        if (DB_STORE_ID.rows[0].count == "0") {
            return res.status(500).send({ error: 'Store Doesnt exist' })
        }

        var delete_query = queries.quriesList.DELETE_STORE_QUERE;

        var result = await dbConnection.dbQuery(delete_query, [STORE_ID])

        return res.status(200).send("Store Deleted successfully")

    }
    catch (error) {
        return res.status(500).send({ error: 'Failed to Delete store' })
    }


}

