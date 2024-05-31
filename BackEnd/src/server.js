const express = require("express");
const cors = require("cors")
const router = require("./router")
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);


app.get("/health", (req, res) => {
    return res.json("up");
});

app.listen(3333, () => console.log("Servidor funcionando na porta 3333"))