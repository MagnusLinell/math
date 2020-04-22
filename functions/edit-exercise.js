const mongoose = require('mongoose');
const co = require('co');

const uri = 'mongodb+srv://math:3nRNjorTeiqszDBN@cluster0-tvvgo.mongodb.net/test?retryWrites=true&w=majority';

let conn = null;

exports.handler = function (event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  run()
    .then(res => {
      callback(null, res);
    })
    .catch(error => callback(error));
};

const run = () => {
  return co(function* () {

    if (conn == null) {
      conn = yield mongoose.createConnection(uri, {
        bufferCommands: false,
        bufferMaxEntries: 0,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      conn.model('courses', new mongoose.Schema({
        name: String,
        title: String,
        dependentOn: String,
        text: String,
      }));
    }

    const Model = conn.model('courses');

    const doc = yield Model.find({});
    const response = {
      statusCode: 200,
      body: JSON.stringify(doc)
    };
    return response;
  });
};