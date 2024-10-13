const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "all.html"));
});

app.get("/download", (req, res) => {
  res.sendFile(path.join(__dirname, "resume", "Mohamed_Nasr_BackEnd_Dev.pdf"));
});

app.use((req, res) => {
  res.send("<h1>404 Not Found</h1>");
});

app.listen(3000, () => {
  console.log("server is listen on http://localhost:" + port);
});
