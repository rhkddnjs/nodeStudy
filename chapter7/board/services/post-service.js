const { collection } = require("../../../chapter6/test-mogoose/person-model");
const paginatior = require("../utils/paginator");
const { ObjectId } = require("mongodb");

async function writePost(collection, post) {
  post.hits = 0;
  post.createDt = new Date().toISOString();
  return await collection.insertOne(post);
}

//글목록
async function list(collection, page, search) {
  const perPage = 10;
  const query = { title: new RegExp(search, "i") };
  const cursor = collection
    .find(query, { limit: perPage, skip: (page - 1) * perPage })
    .sort({
      createDt: -1,
    });
  const totalCount = await collection.count(query);
  const posts = await cursor.toArray();
  const paginatiorObj = paginatior({ totalCount, page, perPage: perPage });
  return [posts, paginatiorObj];
}

// 패스워드는 노출할 필요가 없기때문에 결과값으로안가져옴
const projectionOption = {
  projection: {
    //프로젝션(투영)결과값에서 일부만 가져올 떄 사용
    password: 0,
    "comments.password": 0,
  },
};
async function getDetailPost(collection, id) {
  return await collection.findOneAndUpdate(
    { _id: ObjectId(id) },
    { $inc: { hits: 1 } },
    projectionOption
  );
}
module.exports = {
  writePost,
  list,
};
