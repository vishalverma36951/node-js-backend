const User = require('../models/user');

async function handleGetAllUsers(req, res) {
      const allDBUsers = await User.find({});
    return res.json(allDBUsers);
};

async function handleGetUserById(req, res){
     const user = await User.findById(req.params.id)
    
    // const id= Number(req.params.id);
    // const user = users.find ((user) => user.id === id);
    if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
    return res.json(user);
};

async function handleUpdateById(req,res){
    await User.findByIdAndUpdate(req.params.id, {LastName: 'changed'});
    //Edit user with id
   return res.json({status:"success"})
};
async function handleDeleteById(req,res){
     await User.findByIdAndDelete(req.params.id)
     // Delete the user with id
    return res.json({status:"success"})
};
async function handleCreateUserById(req,res){
      const body= req.body;
    console.log(body);
    
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender ||!body.Job_title)
        {return res.status(400).json({msg: 'All fields are required'});

};
    const result =  await User.create({
         FirstName:body.first_name,
         LastName: body.last_name,
         email: body.email,
         Gender: body.gender,
         JobTitle:body.Job_title,
 })
    console.log("result", result);
    return res.status(201).json({msg: "success", id: result._id});
}

module.exports ={
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateById,
    handleDeleteById,
    handleCreateUserById
}