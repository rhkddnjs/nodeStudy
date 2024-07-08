const express = require("express");
const app = express();
let posts = []; // 게시글 리스트로 사용할 변수

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 루트 경로로 GET 요청이 들어왔을 때 게시글 리스트 반환
app.get("/", (req, res) => {
    res.json(posts);
});

// /posts 경로로 POST 요청이 들어왔을 때 새로운 게시글 추가
app.post("/posts", (req, res) => {
    const { title, name, text } = req.body;
    // 새로운 게시글 정보를 posts 배열에 추가
    posts.push({ id: posts.length + 1, title, name, text, createDt: new Date() });
    res.json({ title, name, text }); // 추가된 게시글 정보 응답
});

// /posts/:id 경로로 DELETE 요청이 들어왔을 때 해당 ID의 게시글 삭제
app.delete("/posts/:id", (req, res) => {
    const id = req.params.id;
    const filteredPosts = posts.filter((post) => post.id !== +id);
    const isLengthChanged = posts.length !== filteredPosts.length;
    posts = filteredPosts;
    if (isLengthChanged) {
        res.json("OK"); // 삭제 성공 응답
        return;
    }
    res.json("NOT CHANGED"); // 삭제되지 않았음을 응답
});

// 서버 시작
app.listen(3000, () => {
    console.log("Welcome! Express server started on port 3000");
});