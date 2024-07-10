const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const cors = require('cors');
const app = express();


//Midleware puente que conectar el front con el back


app.use(bodyParser.json());
app.use (cors());

//conexion con mongoDB
mongoose.connect('mongodb://localhost:27017/Nutricion_clinic',{
    useNewUrlparser:true,
    useUnifiedTopology:true,

}).then(()=>console.log('MongoDb Connected')).catch(err=>console.log(err));
//la ruta oor donde lo va ha hacer
const registrationRoutes= require('./routes/registration')
app.use('/api/registration',registrationRoutes);
const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server Running on port ${PORT}`
));