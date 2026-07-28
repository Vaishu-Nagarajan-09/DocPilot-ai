var express = require('express');
var router = express.Router();
const User = require('../models/userSchema');

router.post('/verify', async function(req,res,next){
    
    try{
        //destructuring the name,email,password
        const{
            user: {
                name, 
                email, 
                password
            },
        } = req.body;
        
// checking existing email 
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(200).json({
                success:false,
                message:"User already exists",
            });
        }


        return res.status(200).json({
            success:true,
            message:"Registration Successfully"
        });
    }
    catch(e){
        console.log(e.message);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        });
    }
})

module.exports = router;