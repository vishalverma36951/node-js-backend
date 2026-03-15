const express = require('express');

const router = express.Router();
const {handleGetAllUsers, 
    handleGetUserById, 
    handleUpdateById, handleDeleteById, 
    handleCreateUserById
    }= require('../controller/user')

// router.get('/users', async (req,res)=>{
//     const allDBUsers = await User.find({});
//     const html= `
//     <ul>
//     ${allDBUsers.map((users) => `<li>${users.FirstName}- ${users.email}</li>`).join("")}
//     </ul>
//     `
//     res.send(html);
// });
//Rest API


router.route('/')
.get(handleGetAllUsers)
.post(handleCreateUserById)


//single route multi task

router.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateById)
.delete(handleDeleteById)
 

module.exports = router;



    
    // users.push({ id: users.length +1, ...body});
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{

    //     return res.status(201).json({status:"success",id: users.length})
    // })
// app.patch('/api/users/:id', (req,res)=>{ 
   
// })
// app.delete('/api/users/:id', (req,res)=>{
   
// })

