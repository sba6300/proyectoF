var express = require("express");

var app=express();

app.set("view engine","jade");

app.get("/",function (req,res) {
  res.render("index");
});
app.get("/:nom",function (req,res) {
  res.render("form",{nom:req.params.nom});
});
app.post("/datos",function (req,res) {
  res.render("form");
});
app.listen(8081);
