/** packages */
const mongoose = require ("mongoose");

/** creacion del esquema */
const courseSchema = new mongoose.Schema({
    code:{
        type : "String",
        required : true
    },
    name:{
        type : "String",
        required : true
    }
});

/**exportacion del esquema */
module.exports = courseSchema;
