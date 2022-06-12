 let PostUser= require("../models/postUsers.js")



 const getUsers = async (req, res) => {
  try {
    const users = await PostUser.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ ok: false, message: error.message });
  }
};

 const addUsers = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new PostUser(user);

    await newUser.save();
    res.status(201).json({ OKAY: true, user });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
};

module.export={getUsers,addUsers}