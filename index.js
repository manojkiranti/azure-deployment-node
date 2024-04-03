const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.json({ data: "data from server" });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
