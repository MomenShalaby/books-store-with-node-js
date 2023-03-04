var express = require('express')
const router =express.Router()
const storeController =require('../controller/storeController')

router.get("/store/getallstore", storeController.getAllStore)

router.post("/store/save",storeController.saveStore)

router.put("/store/update",storeController.updateStore)

router.delete("/store/delete",storeController.deleteStore)

module.exports = router