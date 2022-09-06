const connectDB=require('../shared-services/connect')
const createDoctorService=(fullname,mobile,speciality,fraisvisite)=>{
    let qr=`INSERT INTO doctor (fullname,mobile,speciality,fraisvisite) 
    VALUES('${fullname}', ${mobile}, '${speciality}', ${fraisvisite})`
    return new Promise((resolve, reject) => {connectDB.query(qr,(err,result)=>{
        err? reject (err):resolve(result)
    })
        
    })
}

const getDoctorsService = () =>{
    let qry= 'select * from doctor'
    return new Promise((resolve,reject)=>{
        connectDB.query(qry,(err,resp)=>{
            err ? reject(err) : resolve(resp)
        })
    })
}

const getDoctorByIdService =(id) =>{
    let qry = 'select * from doctor where id='+id
    return new Promise((resolve,reject)=>{
        connectDB.query(qry,(err,resp)=>{
            err ? reject(err) : resolve (resp)
        })    })
}
const deleteDoctorService =(id) =>{
    let qry ='DELETE from doctor where id='+id
    return new Promise((resolve,reject)=>{
        connectDB.query(qry,(err,resp)=>{
            err ? reject(err) : resolve(resp)
        })
    })

}
const updateDoctorService =(id,fullname,mobile,speciality,fraisvisite ) =>{
    let qry =`UPDATE doctor set fullname='${fullname}', mobile=${mobile}, speciality='${speciality}', fraisvisite=${fraisvisite} where id=${id}`
    return new Promise((resolve,reject)=>{
        connectDB.query(qry,(err,resp)=>{
            err ? reject(err) : resolve(resp)
        })
    })
}
module.exports={createDoctorService,getDoctorsService,getDoctorByIdService,updateDoctorService,deleteDoctorService}