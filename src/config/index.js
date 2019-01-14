import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "port": 30asdasd05,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://hamed:mohammad6660@ds257314.mlab.com:57314/shaghasemidb",
  "bodyLimit": "100kb"
}
