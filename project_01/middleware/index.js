const fs =  require("fs");


function logReqRes(filename){
    return (req, res, next) => {
         fs.appendFile("filename",
             `${Date.now()}: ${req.ip}: ${req.method}: ${req.path}\n`,
              (err, data)=>{
        next(); 
            }
        );
    }
}

module.exports = {
    logReqRes
};






// app.use((req, res, next)=>{
//     console.log("Hello From the Middleware");
//     req.MyUserName = "Vishal verma"
//     return res.json({mgs:"Hello From the Middleware"})
//     next();
// })
// app.use((req, res, next)=>{
//     console.log("Hello From the Middleware 11");
//     // return res.end("hey")
//     next();
// })