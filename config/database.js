
var mongoose = require('mongoose');

var dbURI = 'mongodb://demouser:demopassword123@ds147080.mlab.com:47080/demo';

var db = mongoose.connection;

//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function callback() {
//    // yay!
//    console.log("authenticated");

//});

db.on('connecting', function () {
    console.log('connecting to MongoDB...');
});

db.on('error', function (error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});
db.on('connected', function () {
    console.log('MongoDB connected!');
});
db.once('open', function () {
    console.log('MongoDB connection opened!');
});
db.on('reconnected', function () {
    console.log('MongoDB reconnected!');
});
db.on('disconnected', function () {
    console.log('MongoDB disconnected!');
    mongoose.connect(dbURI, { server: { auto_reconnect: true } });
});

mongoose.connect(dbURI, { server: { auto_reconnect: true } });