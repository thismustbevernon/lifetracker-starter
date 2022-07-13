const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const authRouter = require("./routes/auth.js");
const port = 3001;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Good post");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
