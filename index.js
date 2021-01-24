import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("working graphql")
})

const port = 8000;

app.listen(port, () => console.log("Running at "+port));