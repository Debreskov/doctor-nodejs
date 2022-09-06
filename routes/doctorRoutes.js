const  {createDoctorController, getDoctorsController, getDoctorByIdController, updateDocteurContorller, deleteDoctorController} =require('../controllers/doctorController')
const doctorRoute=require('express').Router()
doctorRoute.route('/').post(createDoctorController).get(getDoctorsController)

doctorRoute.route('/:id').get(getDoctorByIdController).patch(updateDocteurContorller).delete(deleteDoctorController)


module.exports=doctorRoute;