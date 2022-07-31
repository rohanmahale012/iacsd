const express=require ("express");
const  app=express();
const mysql=require("mysql");


var con=mysql.createConnection({
    host:"localhost:3306",
    user:"root",
    password:"root",
    //port:"3306"
    //database:"iacsdmar22"
});


con.connect((err)=>{
    if (err)
    console.log(" db connection faild ");

else
{
    con.query("select * from emp",(err,date)=>{
        
        if (err)
           console.log("no data err");

           else{
            console.log(date);
           }
    })
}
})


app.get("/",(req,res)=>{
    res.send(
        "<h1>Vijay</h1>"
    )
})



app.listen(9000,()=>{
    console.log("listening on server");

});