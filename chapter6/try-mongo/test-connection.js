const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://admin:1234@cluster0.uug3umk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  const adminDB = client.db('test').admin();
  const listDatabases = await adminDB.listDatabases();
  console.log(listDatabases);
  return "OK";
}

run()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());