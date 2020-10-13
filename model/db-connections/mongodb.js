/** other user : api_rest_user */
/** password : 91l2vH11JTgiIwjv */

//mongodb+srv://api_rest_user:91l2vH11JTgiIwjv@cluster0.3svcd.mongodb.net/dbApi

/** packages */

const mongoose = require("mongoose");
const config = require("config");
const mongodbInfo = config.get("db-connections.mongodb");

const connStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`;



module.exports = () => {
    mongoose.connect(connStr,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        });

    mongoose.connection.on("connected", () =>{
        console.log("mongodb server connected");
    });

    mongoose.connection.on("disconnected", () =>{
        console.log("mongodb server disconnected");
    });

    mongoose.connection.on("error", () =>{
        console.log("mongodb server connection error");
    });

    mongoose.connection.on("SIGIN", () =>{
        mongoose.connection.close(() => {
            console.log("mongodb server shutting down");
        });
        console.log("mongodb server disconnected");
    });
};