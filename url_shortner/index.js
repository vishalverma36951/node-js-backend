const express = require("express");
const {connectToMongoDB}= require('./connection');
const URL = require('./models/url');
const path = require("path");
const cookieParser = require('cookie-parser');
const {checkForAuthentication, restrictTo}= require('./middleware/auth')

const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const UserRoute = require('./routes/user')

const app = express();   
const PORT = 8001;

connectToMongoDB('mongodb+srv://vishalverma36951:Vicky2003@cluster0.xdxxqnn.mongodb.net/short-url')
.then(()=> console.log('mongodb connected')
);

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(checkForAuthentication);

// app.get("/test", async (req, res)=> {
//     const allUrls = await URL.find({});
//     return res.render('home', {
//         urls: allUrls,
//     })

// });

app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoute) 
app.use('/', staticRoute) 
app.use('/user', UserRoute)
 
app.get('/url/:shortId', async(req, res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
        visitHistory: {  
            timestamp: Date.now(),
        },
    },
    });
     if (!entry) {
        return res.status(404).send('Short URL not found');
    }
    res.redirect(entry.redirectURL)
})

app.listen(PORT,()=> console.log(`Server started at PORT: ${PORT} `)
)
