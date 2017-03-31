//NOTE: Always place children schemas above the parent
//this seems to be necessary if you want embedded children to contain their own _id property

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var emailSchema = Schema({
    address: { type: String, required: true, trim: true, unique: true }, //UNIQUE
    primary: { type: Boolean },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, 
{
    _id: true,
    versionKey: false
});


var accountSchema = Schema({
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    user_name: { type: String, required: true, index: true, trim: true, unique: true },     //INDEXED + UNIQUE
    password: { type: String, required: true, trim: true },
    emails: [emailSchema],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Account', accountSchema);

