const MongoClient  = require("mongodb").MongoClient
const url = "mongodb+srv://admin:1234@cluster0.uug3umk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// MongoClient생성
const client = new MongoClient(url, {useNewUrlParser : true});

async function main(){
    try{
        //2.커넥션을 생성하고 연결시도
        await client.connect();
        console.log("MongoDB 접속 성공");
        
        //3.test데이터베이스의 person 컬렉션 가져오기
        const collection = client.db('test').collection('person');

        //4 문서하나 추가
        await collection.insertOne({name:'Andy', age : 30})
        console.log('문서추가 완료')

        //5.문서찾기
        const documents = await collection.find({name : 'Andy'}).toArray();
        console.log('찾은문서: ', documents);

        //6.문서 갱신하기
        await collection.updateOne({name:'Andy'},{$set:{age:31}});
        console.log('문서업데이트')

        //7 갱신된 문서 확인하기
        const updateDocuments = await collection.find({name:'Andy'}).toArray();
        console.log('갱신된 문서: ',updateDocuments)

        // 문서 삭제하기
        // await collection.deleteOne({name:'Andy'});
        // console.log('문서삭제');

        //연결끊기
        await client.close();
    }
    catch(err){
        console.error(err);
    }
}
main();