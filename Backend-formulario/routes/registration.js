//Create Read Update Delete (CRUD)

const express = require("express");
const router = express.Router();
const Registration = require("../models/Registration");
//crear un registro

router.post("/", async (req, res) => {
  console.log("Datos recibidos",req.body);
  const { name, email, password } = req.body;
  try {
    const newRegistration = new Registration({ name, email, password });
    await newRegistration.save();
    res.status(201).json(newRegistration);
  } catch (err){
    res.status(400).json({ message: err.message });
  }
});
//obtener registros
router.get("/", async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json(registrations);
  } catch (err){
    res.status(500).json({ message: err.message });
  }
});
// Obtener un registro por ID
router.get("/:id", async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);
    if (!registration) return res.status(404).json({ message: "Not Found" });
    res.json(registration);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//Actualizar un registro

router.put("./:id", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const updateRegistration = await Registration.findByIdAndUpdate(
      req.params.id,
      { name, email, password },
      { new: true }
    );
    if (!updateRegistration)
      return res.status(404).json({ message: "Not Found" });
    res.json(updateRegistration);
  } catch (err) {
    res.status(400).json({message:err.message});
  }
});

//Eliminar un registro por ID
router.delete('/:id', async (req,res)=>{
    try{
        const deleteRegistration = await Registration.findByIdAndDelete(req.params.id);
        if(!deleteRegistration) return res.status(404).json({message:'Not found'});
        res.json({message:'Deleted Succesful'});
        }catch (err){
            res.status(500).json({message:err.message});
        }

});
module.exports=router;