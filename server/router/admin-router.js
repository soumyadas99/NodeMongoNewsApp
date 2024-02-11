const express=require('express')
const {getAllUsers,addNews,getAllNews}=require("../controllers/admin-controller")
const authMiddleware=require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
//const { AdminAddNews } = require('../../client/src/pages/Admin-Add-News');
const router=express.Router()


router.route("/users").get(authMiddleware,adminMiddleware,getAllUsers);

//added by me for news part
router.route("/addnews").post(authMiddleware,adminMiddleware,addNews);
router.route("/viewnews").get(authMiddleware,adminMiddleware,getAllNews);

module.exports=router;