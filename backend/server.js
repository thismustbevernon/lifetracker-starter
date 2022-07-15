const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { NotFoundError } = require("./utils/errors");
const { PORT } = require("./config");
const security = require("./middleware/security");
const authRoutes = require("./routes/auth");
const nutritionRoutes = require("./routes/nutrition");
const exerciseRoutes = require("./routes/exercise");
const sleepRoutes = require("./routes/sleep");
const activityRoutes = require("./routes/activity");

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("tiny"));

app.use(security.extractUserFromJwt);

app.use("/auth", authRoutes);
app.use("/nutrition", nutritionRoutes);
app.use("/exercise", exerciseRoutes);
app.use("/sleep", sleepRoutes);
app.use("/activity", activityRoutes);

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running http://localhost:${PORT}`);
});







// const express = require("express");
// const app = express();
// const cors = require("cors");
// const morgan = require("morgan");
// const authRouter = require("./routes/auth.js");
// const port = 3001;

// app.use(cors());
// app.use(morgan("tiny"));
// app.use(express.json());
// app.use("/auth", authRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.send("Good post");
// });
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
