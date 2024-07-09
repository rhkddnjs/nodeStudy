const express = require("express");
const handlebars = require("express-handlebars");
const postService = require("./services/post-service");
const mongodbConnection = require("./configs/mongodb-connection");
const { render } = require("ejs");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Handlebars 엔진 등록
app.engine(
    "handlebars", 
    handlebars.create({
        helpers: require("./configs/handlebars-helpers"),
    }).engine,
);

// Express에 Handlebars를 템플릿 엔진으로 설정
app.set("view engine", "handlebars");

// 뷰(템플릿) 파일이 위치한 디렉토리 설정
app.set("views", __dirname + "/views");
// 서버를 3001 포트에서 실행


// 몽고디비 연결 함수

// 라우터 설정
app.get("/", async(req, res) => {

    const page = parseInt(req.query.pahe) || 1;
    const search = req.query.search ||"";
    try{
        const[posts, paginatior] = await postService.list(collection, page, search);
        // list페이지 렌더링
        res.render("home", { title: "테스트 게시판", search, paginatior, posts});
    }catch(error){
        console.error(error);
        res.render("home", {title:"테스트 게시판"});
    }
});


//글쓰기
app.get("/write", (req,res)=>{
    res.render("write",{title:"테스트 게시판"});
})
app.post("/write", async(req,res)=>{
    const post = req.body
    const result = await postService.writePost(collection, post);
    res.redirect(`/detail/${result.insertedId}`);
});


app.get("/detail/:id", async(req,res)=>{
    res.render("detail", {title:"테스트 게시판"});
});



let collection;
app.listen(8080, async() => {
    console.log("Server is running on http://localhost:3001");
    const mongoClient = await mongodbConnection();
    collection = mongoClient.db().collection("post");
    console.log("MongoDB connceted");
});
