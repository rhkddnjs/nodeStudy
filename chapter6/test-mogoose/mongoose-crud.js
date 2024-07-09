const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./person-model");

const app = express();
app.use(bodyParser.json());

const mongodbUri = "mongodb+srv://admin:1234@cluster0.uug3umk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// 몽고DB에 커넥션 맺기
mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");

        // Express 서버 실행
        app.listen(3001, () => {
            console.log("Server started");
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error.message);
    });

// 모든 person 데이터 출력
app.get("/person", async (req, res) => {
    const people = await Person.find({});
    res.send(people);
});

// 특정 email로 person 찾기
app.get("/person/:email", async (req, res) => {
    const person = await Person.findOne({ email: req.params.email });
    res.send(person);
});

// person 데이터 추가하기
app.post("/person", async (req, res) => {
    const person = new Person(req.body);
    await person.save();
    res.send(person);
});

// person 데이터 수정하기
app.put("/person/:email", async (req, res) => {
    const person = await Person.findOneAndUpdate(
        { email: req.params.email },
        { $set: req.body },
        { new: true }
    );
    res.send(person);
});

// person 데이터 삭제하기
app.delete("/person/:email", async (req, res) => {
    await Person.deleteMany({ email: req.params.email });
    res.send({ success: true });
});