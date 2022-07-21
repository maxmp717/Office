import express from 'express';
const router = express.Router();
import bcrypt, { hash } from 'bcrypt';
import  jwt  from 'jsonwebtoken';
import Key from '../config/key.js';
// import passport from 'passport' ;
 
import loginValidate from '../validation/login.js';
import registerValidate from '../validation/register.js';

import User from '../models/user.model.js'

router.route('/register').post((req,res)=>{

    const {errors,isValid} = registerValidate(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({email:req.body.email})
    .then(user=>{
        if(user){
            return res.status(400).json({emailAlready:'Email already exist'});
        }else{
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password:req.body.password,
                empId: req.body.empId,
                role: req.body.role
            });
            
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    if (err) {console.log( err);}
                    newUser.password = hash;
                    newUser.save()
                    .then(user=>res.json(user))
                    .catch(err=>console.log(err))
                })
            })
        }
    })

})

router.route('/login').post((req,res)=>{

    const {errors,isValid} = loginValidate(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password =  req.body.password;
    console.log(email)
    console.log(password)

    User.findOne({email}).then(user=>{
        if(!user){
            return res.status(404).json({emailnotfound: 'email not found'})
        }

        bcrypt.compare(password,user.password)
        .then(isMatch =>{
            if(isMatch){

                const payload = {
                    id : user.id,
                    name: user.name,
                    email: user.email,
                    empId: user.empId,
                    role: user.role
                };

                jwt.sign(
                    payload,Key.key,{
                        expiresIn: 900
                    },
                    (err,token)=>{
                        res.json({
                            success: true,
                            token: 'Bearer' + token
                        })
                    }
                )
            }else{
                return res.status(400).json({passwordinCorrect:'Password Incorrect'})
            }
        })
    })


})

router.route('/users').get((req,res)=>{
    User.find({},'name')
    .then(user=>res.json(user))
    .catch((err)=>res.status(400).json('Error:'+err))
})

export default router
