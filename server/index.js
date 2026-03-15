// const http= require("http");
// const fs= require("fs");
// const url = require('url');
const express = require("express");

const app = express();
app.get('/',(req, res)=>{
    return res.send("hello from Home page");
});
app.get('/about',(req, res)=>{
    // return res.send("hello from about page"+" 
    // hey "+req.query.name + 
    // " Your class is " + 
    // req.query.class);
    return res.send(`hello ${req.query.name}, ${req.query.class}`)
});

// function myHandler(req, res){
//     //  if(req.url==="/favicon.ico") return res.end();
//         const log = `${Date.now()}: ${req.method} ${req.url} New req received\n`
//         const myurl = url.parse(req.url,true);
//         // console.log(myurl);
        
//         fs.appendFile('log.txt',log, (err, data) =>{
//             switch (myurl.pathname) {
//                 case '/':
//                     if(req.method==="GET") res.end('Homepage')
//                     break;
//                 case '/about':
//                     const username = myurl.query.myname
//                     if(req.method==="GET") res.end(`hi,${username}`)
//                     break;
//                 case '/signup':if(req.method==="GET") res.end("This is signup form");
//                 else if(req.method=== "POST"){
//                     // DB Query
//                     res.end("This is Post request")};
//                     break;
//                     case '/search':
//                         const search= myurl.query.search_query;
//                         res.end("Here are your results for "+search);
//                         break;
//                 default: 
//                     if(req.method==="GET")res.end("404 Error")
//                     break;
//                     }
//                     // res.end("Hello From Server Repeat");
//         })
// };

// const myServer = http.createServer(app);

// myServer.listen(8000, ()=> console.log("Server Started!"));

app.listen(8000, ()=> console.log("Server Started!"));