//for file handling

// const { log } = require("console");
const fs = require("fs");
const os = require("os");
console.log(os.cpus().length);


// sync......... Bloking - Request.......
// fs.writeFileSync("./test.txt", 'hey I am present there')

//Async .........Non-Blocking - Request.......

// fs.writeFile ("./test.txt","hey i am there", (err)=> {});


// const result= fs.readFileSync("./list.txt", "utf8");
// console.log(result);

// fs.readFile("./list.txt","utf-8", (err,result) =>{
//     if(err){
//         console.log("ERROR",err);
//     }else{
//         console.log(result);
//     }
// });

// fs.appendFileSync("./list.txt", ` ${Date.now()}Hey there is a person\n`)

// fs.cpSync("./test.txt", "./copytest.txt");

// delete any file
// fs.unlinkSync("./copytest.txt")

//for file details
// console.log(fs.statSync("./list.txt").isFile());

// for make new directory

// fs.mkdirSync("mynewFile/a/b",{recursive:true});


// blocking request......
// console.log("Vishal");
// const result = fs.readFileSync('./test.txt','utf-8')
//     console.log(result);
// console.log("Vicky");


// Non blocking request..........

// console.log("1");
// console.log("2");

// fs.readFile("./test.txt","utf-8", (err, result) =>{
//     console.log(result);
// })
// console.log("3");
// console.log("4");


//By default Thread pool Size is = 4,
//Maximum  thread pool size according to pc core ex- pc is 8 core then thread pool is size is 8
