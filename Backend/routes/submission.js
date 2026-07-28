var express = require('express');
var router = express.Router();
const User = require('../models/userSchema');
const { hashPassword } = require('../utils/bcryptUtils');

router.post('/userSubmit', async function (req, res, next) {
    
    try {
        const { name, email, password, plan } = req.body;

        if (!plan) {
            return res.status(400).json({
                status: "Plan is required"
            });
        }

        const payTime = new Date();

        let expiryTime;

        switch (plan.planName) {
            case "Basic":
                expiryTime = 1;
                break;

            case "Pro":
                expiryTime = 7;
                break;

            case "Premium":
                expiryTime = 30;
                break;

            default:
                return res.status(400).json({
                    status: "Invalid Plan"
                })
        }

        const endDate = new Date(payTime.getTime() + expiryTime * 24 * 60 * 60 * 1000);

        const { hash, salt } = await hashPassword(password);

        const newData = new User({
            name,
            email,
            hashPassword: hash,
            salt,
            planName: plan.planName,
            payTime,
            endDate
        });

        await newData.save();

        return res.status(200).json({
            status: "Success",
            expiryTime: endDate
        });
    }
    catch (e) {
        console.log(e);

        return res.status(500).json({
            status: "Server Error"
        });
    }

});

module.exports = router;