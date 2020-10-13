/** packages */

const mongoose = require("mongoose");

/** usando los esquemas */

const schema = require("../schemas/period.schemas");

schema.statics ={
    create : function(data,cb){
        let doc = new this(data);
        doc.save(cb);
    },
    getAll : function(query,cb){
        this.find(query, cb);
    },
    update : function(query,data,cb){
        this.findOneAndUpdate(query, {$set : data}, {new : true},cb);
    },
    delete : function(query,cb){
        this.findOneAndDelete(query);
    }

};

const dto = mongoose.model("coll_period",schema);
module.exports = dto;
