const express  = require('express')
const port = 8000
const bodyParser = require('body-parser')
const app = express()
const db = require('./config/mongoose')
// const feynmanrRoutes = require('./routes/feynmanRoutes') 
var cors = require('cors');

// cors (secure cross-origin requests)
var corsOptions = {
    origin: '*',
}
app.use(cors(corsOptions));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// routes 
// app.use('/', feynmanrRoutes)

// app.get('/', (req,res) =>{
//     console.log('running');
// })

app.listen(port, function(err){
    if(err) {console.log("error"); return;}
    console.log(`running server on port: ${port}`);
})

