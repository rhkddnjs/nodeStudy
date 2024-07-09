const {MongoClient} =require("mongodb");
const uri =
  "mongodb+srv://admin:1234@cluster0.uug3umk.mongodb.net/board?retryWrites=true&w=majority";

module.exports = function (callback) {
  return MongoClient.connect(uri, callback);
};