const express=require('express');
const router=express.Router();
const {getAllData,getAllTestingData}=require('../controllers/datacontrollers');
router.route('/').get(getAllData);
router.route('/testing').get(getAllTestingData);
module.exports = router;