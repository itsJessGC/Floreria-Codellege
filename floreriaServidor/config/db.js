const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conexion = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("DB Conectada");
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

module.exports = conexion;