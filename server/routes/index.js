const express = require('express');
const router = express.Router();
const database = require('./firebase/config');


router.get('/', function(req, res){
    res.send({greeting:'Hello React x Node.js'});
});

router.get('/dh', function(req, res){
    res.send({greeting:'Hello dh !'});
}); 

// FIREBASE 연결 성공
router.get('/save', function(req, res){
    database.ref('customer').set({name : "daehyun"}, function(error) {
        if(error)
            console.error(error)
        else
            console.log("success save !!");
    });
    return res.json({firebase : true});
});


module.exports = router;