require('dotenv').config();
const express = require("express");

const app = express();
app.use(express.json());

app.get("/users", (req, res) => {
    res.send("Hello");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})