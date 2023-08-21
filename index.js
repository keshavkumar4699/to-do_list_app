const express = require('express');
const app = express();
const path = require('path');

const port = 8000;

//use express router for all get and post method
app.use('/', require(path.join(__dirname,'./routes/home_router')));
app.use(express.static(path.join(__dirname,'./assets')));

//setup view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//setting up listening port for complete process
app.listen(port, (err)=>{
    if(err){
        console.log(`server fat gya bhai: ${err}`);//this is called interpolation
    }
    console.log(`${port} pe chal rha server`);
})