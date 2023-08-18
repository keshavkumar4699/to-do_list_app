const express = require('express');
const app = express();

const port = 8000;

//use express router for all get and post method
app.use('/', require('./routes/routers_index'));


app.listen(port, (err)=>{
    if(err){
        console.log(`server fat gya bhai: ${err}`);//this is called interpolation
    }
    console.log(`${port} pe chal rha server`);
})