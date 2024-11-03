const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// EJSをテンプレートエンジンとして設定
app.set("view engine", "ejs");

// 静的ファイルを提供
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// ルート：ホーム画面のリダイレクト
app.get("/", (req, res) => {
  res.redirect("/login");
});

// ログイン画面のルート
app.get("/login", (req, res) => {
  res.render("login");
});

// ユーザー登録画面のルート
app.get("/register", (req, res) => {
  res.render("register");
});





const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
