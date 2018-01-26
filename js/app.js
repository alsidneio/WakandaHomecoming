/*====================================================*/
/* Node Form Handling & Information saving 
/*====================================================*/
var express=require("express");
var app= express();
var port=3000;
var path=require("path");

app.use("/", (req,res)=>{
res.sendFile(path.resolve("index.html"));
});

app.listen(port, () => {
  console.log("Server Listening on port "+ port);
});
