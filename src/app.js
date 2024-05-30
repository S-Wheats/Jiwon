const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB 연결 설정
mongoose.connect("mongodb://localhost:27017/s-wheats", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 미들웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// 라우트 설정
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
