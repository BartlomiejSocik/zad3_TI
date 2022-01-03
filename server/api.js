
var Db  = require('./dboperations');
var Jednostki = require('./jednostki');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request,response,next)=>{
   console.log('middleware');
   next();
})

router.route('/jednostki').get((request,response)=>{

    dboperations.getJednostki().then(result => {
       response.json(result[0]);
    })

})

router.route('/jednostki/:id').get((request,response)=>{

    dboperations.getJednostka(request.params.id).then(result => {
       response.json(result[0]);
    })

})

router.route('/jednostki/:rodzaj/:dataOD/:dataDO').get((request,response)=>{
   console.log(request.params)
   dboperations.getJednostkiv1(request.params.rodzaj, request.params.dataOD, request.params.dataDO).then(result => {
      response.json(result[0]);
   })
   
})


var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);



