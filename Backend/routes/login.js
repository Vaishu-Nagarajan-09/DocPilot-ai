var express = require("express");
var router = express.Router();
const User = require('../models/userSchema');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

router.post('/userLogin', async function(req,res,next){
   
    try{
        const {email, password} = req.body;
        
        const SECRET = process.env.JWT_SECRET;
        console.log("JWT SECRET:", SECRET);
        console.log("....",email,password);

        const userLoginDetail = await User.findOne({email});

        if(!userLoginDetail){
            return res.status(404).json({
                message: "User not found"
            });
        }
        
        const savePassword = userLoginDetail.hashPassword;
        console.log("savePwd", savePassword);

        const isPasswordValid = await bcrypt.compare(password, savePassword);

        if(!isPasswordValid){
            return res.status(401).json({
                message:"Invalid Password"
            });
        }
       

        const currentTime = new Date();
        
        const expiryTime = userLoginDetail.endDate;
        
        if(currentTime > expiryTime){
            return res.json({
                message:"Plan expired, Please upgrade!"
            });
        }

        const token = jwt.sign({email}, SECRET, {expiresIn: "1h"} );
        return res.status(200).json({
            success: true,
            message:"Login Successfully",
            userLoginDetail,
            token
        });
        

    }catch(e){
        console.log(e);
    }
});

module.exports = router;