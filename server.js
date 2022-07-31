const express=require ("express");
const  app=express();






app.get("/",(req,res)=>{
    res.send(
        "<h1>Vijay</h1>"
    )
})



app.listen(9000,()=>{
    console.log("listening on server");

});