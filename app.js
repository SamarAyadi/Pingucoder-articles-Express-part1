//  to controll ur website
const express = require("express");
const app = express();
const port = 5000;
app.set('view engine', 'ejs')
app.use(express.static('public'))

// for auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));


const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});


app.get("/", (req, res) => {
  res.redirect("/all-articles");
});


app.get("/all-articles", (req, res) => {
  res.render("index");
});
app.get("/add-new-article", (req, res) => {
  res.render("add-new-article");
});

app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => {
  console.log(`Marhba Bik  on port at http://localhost:${port}`);
});
