var express = require('express');
var router = express.Router();

function randomNumber(min, max){
        return Math.floor(Math.random() * (1 + max - min) + min);
}

router.get('/', function(req,res) {
 res.send(randomNumber(1,100));
});



 module.exports = router;