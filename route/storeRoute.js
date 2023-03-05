var express = require('express')
const router =express.Router()
const storeController =require('../controller/storeController')

router.get("/store/getallstore", storeController.getStoresList)

router.post("/store/create",storeController.createStore)

router.put("/store/update",storeController.updateStore)


router.delete("/store/delete",storeController.deleteStore)

module.exports = router
