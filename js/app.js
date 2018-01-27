/*====================================================*/
/* Node Form Handling & Information saving 
/*====================================================*/
var express=require("express");
var bodyParser=require('body-parser');
var path=require("path");

/*====================================================*/
/* Setting Up Connection to MongoDB
/*====================================================*/
var MongoClient= require("mongodb").MongoClient;
var db;
MongoClient.connect("mongodb://alsidneio:Morehouse2012@ds046867.mlab.com:46867/wakandahomecoming",(err,database)=>{
    if(err) return console.log(err)
    db=database.db("wakandahomecoming")
    app.listen(3000,()=>{
        console.log("listening on 3000")
    });
});

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res)=>{
    res.sendFile(path.resolve("index.html"));
    });

app.post("/addSponsor", (req,res)=> {
    db.collection("addSponsor").save(req.body,(err,result)=>{
        if (err) return console.log(err)

        console.log("saved to database")
        res.redirect("/")
    })
})



 
    
//     app.listen(port, () => {
//       console.log("Server Listening on port "+ port);
//     });
 
/*====================================================*/
/* Connecting to MongoDB
/*====================================================*/

// var mongoose= require("mongoose");
// mongoose.Promise= global.Promise;
// mongoose.connect("mongodb://localhost:27017/WakandaHomecoming");

/*====================================================*/
/* Formatiing data to be sent to MongoDb
/*====================================================*/

// var contactSchema= new mongoose.Schema({
//     Name: String,
//     Email: String,
//     Business:String,
//     Phone:Number
// });

// var Sponsor=mongoose.model('Sponsor', contactSchema);

// app.post("/addSponsor",(req,res)=>{
//     console.log(req.body)
//     // var newSponsor= new Sponsor(req.body);
//     // newSponsor.save().then(item=>{
//     //     res.send("item saved to database");
//     // })
//     // .catch(err=>{
//     //     res.status(400).send("unable to save to database");
//     // });
// });






