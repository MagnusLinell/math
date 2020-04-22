const mongoose = require('mongoose');
const co = require('co');

const uri = `mongodb+srv://${process.env.MONGO_USERNAME || 'math'}:${process.env.MONGO_PASSWORD || '3nRNjorTeiqszDBN'}@cluster0-tvvgo.mongodb.net/test?retryWrites=true&w=majority`;

let conn = null;

exports.handler = function (event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  const body = event.body;
  if (!body) {
    return callback({ error: true }, null);
  }
  run(JSON.parse(body))
    .then(res => {
      callback(null, res);
    })
    .catch(error => callback(error));
};

const run = ({ name, title, text, dependentOn }) => {
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

    const model = new Model({
      name,
      title,
      text,
      dependentOn,
    });
    const saved = yield model.save();

    const response = {
      statusCode: 200,
      body: JSON.stringify(saved)
    };
    console.log({ response });
    return response;
  });
};

if (process.env.ENVIRONMENT !== 'production') {
  run({ name: 'algebra-1', title: 'algegra-1', text: 'Lär dig algebra!', dependentOn: 'none' });
}