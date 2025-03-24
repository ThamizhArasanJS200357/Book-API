const express=require('express');
const { getAllbook, addbook, getidbook, updatebook, deletebook } = require('../Controller/controller');

const router=express.Router();

router.route('/allbook').get(getAllbook);
router.route('/addbook').post(addbook);
router.route('/getidbook/:id').get(getidbook);
router.route('/updatebook/:id').put(updatebook);
router.route('/delbook/:id').delete(deletebook);

module.exports=router;