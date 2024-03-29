/* B"H
*/
const express = require('express');
const model = require('../models/users');

const app = express.Router();

    app
        .get('/', (req, res)=>{
            res.send( model.GetAll() );
            console.log(req.headers);            
        }  )
        .get('/:user_id',(req, res)=> res.send( model.Get(req.params.user_id) ))
        .post('/', (req, res)=> { 
            res.send( model.Add(req.body) );
        })
        .post('/register', (req, res, next)=> {
            model.Register(req.body)
            .then(user=> res.send( user  ))
            .catch(next);
        })
        .post('/login', (req, res)=> { 
            res.send( model.Login(req.body.handle, req.body.password) )
        })
        .patch('/:user_id', (req, res)=> res.send( model.Update( req.params.user_id, req.body ) ) )
        .delete('/:user_id', (req, res)=> res.send( model.Delete(req.params.user_id) ) )


module.exports = app;