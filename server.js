const express = require('express')
let app = express();
const mongoose = require('./db/db_connect');
const voiture=require('./routes/voiture');
const { swaggerUi, specs } = require('./swagger/swagger');
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/voiture',voiture)
app.listen(3000,()=>{
    console.log('server work');
})