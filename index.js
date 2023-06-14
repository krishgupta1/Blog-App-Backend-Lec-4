const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("App is Running Successfully");
})

app.get("/", (res, req) => {
    res.send(`<h1>This is my HomePage Baby</h1>`)
})