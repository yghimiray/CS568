var express = require('express');
var router = express.Router();

 
router.get('/', function(req, res, next) {
  res.json([
      {name:'test movie', rating:4,genre:'comedy'},
      {name:'test movie2', rating:4,genre:'comedy'}
    ]);
});
 

router.post('/',(req,res)=>{
       console.log(req.body);
       res.json({})
})

//update
// router.put('/',(req,res)=>{
//     req.db.collection('movie').updateOne({})
// })

module.exports = router;


//sudo