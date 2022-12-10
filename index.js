const fs = require('fs');


const express = require("express");
const app = express();
const coronaData = require("./coronaData.json");
const activities = require("./activities.json");


app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", function (req, res) {
    fs.writeFile(__dirname + "/data.txt", req.body.activity, function () {
        res.send(" 投稿 完了");

    });
})

app.get("/update", function (req, res) {
    activities[0].activity = req.body.updatedActivity; // 追加


    res.send(activities);
});

app.post("/delete", function (req, res) {
    activities.splice(req.body.number, 1);
    res.send(activities);
});






app.listen(5000, function () {
    console.log(" Listening on localhost port 5000");
});
