const {createDoctorService, getDoctorByIdService, getDoctorsService, deleteDoctorService, updateDoctorService}=require('../services/doctorService')
const {statusCodes}=require('http-status-codes') // res.status (200)
const createDoctorController =async(req,res)=>{
    // const fullname=req.body.fullname
    // const mobile=req.body.mobile
    // const specialtiy=req.body.specialtiy
     // const fraisvisite=req.body.fraisvisite
     const {fullname,mobile,speciality,fraisvisite}=req.body //ceci nommé : distruction
     await createDoctorService(fullname,mobile,speciality,fraisvisite)
     res.status(201).send('created doctor' );
}
const getDoctorsController = async (req,res) =>{
    const alldoctors = await getDoctorsService()
    res.status(200).send(alldoctors)
}
const getDoctorByIdController = async (req,res) =>{
    const id = req.params.id
    const doc = await getDoctorByIdService (id)
    // if (Object.keys(doc).length===0){
    //     return res.status(500).send('introuvable')
    //     console.log('inside if')
    // }
    // console.log('hello')
    res.status(200).send({doc:doc,msg:'doctor'})
}
const deleteDoctorController = async (req,res)=>{
    const id = req.params.id
    const deldoctor = await deleteDoctorService(id)
    res.status(200).send('Deleted Doctor') 
}
const updateDocteurContorller = async (req,res)=>{
    const id = req.params.id
    const fullname = req.body.fullname
    const mobile = req.body.mobile
    const speciality = req.body.speciality
    const fraisvisite = req.body.fraisvisite
    const updatedoctor = await updateDoctorService(id,fullname,mobile,speciality,fraisvisite )
    res.status(200).send('Update Doctor')
}
module.exports ={createDoctorController,getDoctorsController,getDoctorByIdController,updateDocteurContorller,deleteDoctorController}

    
