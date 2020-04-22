const mongoose = require('mongoose');
const co = require('co');

const uri = `mongodb+srv://${process.env.MONGO_USERNAME || 'math'}:${process.env.MONGO_PASSWORD || '3nRNjorTeiqszDBN'}@cluster0-tvvgo.mongodb.net/test?retryWrites=true&w=majority`;

let conn = null;

exports.handler = function (event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  const { body } = event;
  if (!body) {
    return callback({ error: true }, null);
  }
  run(JSON.parse(body))
    .then(res => {
      callback(null, res);
    })
    .catch(error => callback(error));
};

const run = ({ name }) => {
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
        text: String,
        dependentOn: String,
      }));
    }

    const Model = conn.model('courses');

    const doc = yield Model.find({ name });
    const response = {
      statusCode: 200,
      body: JSON.stringify(doc),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Max-Age': '2592000',
        'Access-Control-Allow-Credentials': 'true',
      }
    };
    console.log({ response });
    return response;
  });
};

if (process.env.ENVIRONMENT !== 'production') {
  run();
}