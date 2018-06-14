let express = require('express');
let router = express.Router();
let course = require('../../models/course.model');
let {auth,permit} = require('../../functions/authentication');

router.get('/',(req,res)=>{
    course.find({}).then((course)=>{
        res.send({
            status:'success',
            data:{
                course:course
            }
        })
    }).catch(error=>{
        res.send({
            status:'error',
            error:err
        })
    })
})

router.delete('/:id', auth, permit('teacher'),(req, res)=>{
    course.findByIdAndRemove(req.params.id).then((course)=>{
        res.send({
            status:'success',
            data:{
                course:course
            }
        })
    }).catch((error)=>{
        res.send({
            status:'success',
            error:error
        })
    })
})

router.get('/:id',(req,res)=>{
    course.findById(req.params.id,(err,course)=>{
        if(err)
            return res.send({
                status:'error',
                error:err
            })
        return res.send({
            status:'success',
            data:{
                course:course
            }
        })
    })
})

router.post('/',auth,permit('teacher'),(req,res)=>{
    let course= new course(req.body);
    course.save(err=>{
        if(err)
            res.send({
                status:"error",
                error:err
            })
        res.send({
            status:'success',
            data:{
                message:"course successfully added"
            }
        })
    })
})

module.exports=router; 