const express=require("express");
const bodyparser=require("body-parser");
const request=require("request");
const app=express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
var blog=[];
var post=[
  "",
  ""
];
app.get("/",function(req,res){
  res.render("home",{titles:blog});
});
app.get("/aboutus",function(req,res){
res.render("aboutus",{title:"About US",content:"About me"});
});
app.get("/contactus",function(req,res){
  res.render("contactus");
});
app.get("/viewpage",function(req,res){
console.log(req.body);
  res.render("viewpage");
});
app.post("/viewpage",function(req,res){
console.log(req.body.alink);
post=blog[req.body.alink];
  res.render("viewpage",{postvar:post});
})
app.get("/compose",function(req,res){
  res.render("compose");
});
app.post("/compose",function(req,res){
  //post.title=req.body.title;
  //post.content=req.body.content;
  post=[req.body.title,req.body.content];
  blog.push(post);
  console.log(blog);
  res.redirect("/");
});
app.listen(process.env.PORT||3000,function(){
  console.log("Listening to port 3000");
})
