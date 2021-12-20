const emailjs = require('emailjs-com')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')
const { hasPassword } = require('../helpers/auth')

const getAll = async(req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({mensagem: "Usuários cadastrados", users})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const register = async(req, res) => {
    const { name, email, password, security_question, security_response} = req.body
    
    try {
           
        const newUser = new User({
            name,
            email,
            password,
            security_question,
            security_response
        })

        //trato o campo password para ser criptografado
        const passwordHashed = await hasPassword(newUser.password, res)
        
        newUser.password = passwordHashed

        const saveUser = await newUser.save()
        res.status(201).json({
            mensagem: "Pessoa cadastrada com sucesso!",
            saveUser
        })

       } catch(error) {
        res.status(500).json({
            message: error.message
        })

    }
    
}


const update = async(req, res) => {
    const {name, password, security_response, email} = req.body

    try {
            const updateUser = await User.findOne({security_response: security_response});
           
            if (updateUser) {
              
                // armazena na variável o valor recebido no body da request ou mantém o valor atual
                updateUser.name = req.body.name || updateUser.name 
                updateUser.password = req.body.password || updateUser.password
                updateUser.email = req.body.email || updateUser.email

                const passwordHashed = await hasPassword(updateUser.password, res)
        
                updateUser.password = passwordHashed
               
                const saveUser = await updateUser.save();
                
                res.status(200).json({
                    message: "Os dados foram atualizados com sucesso",
                    saveUser
                })
            }
    
            res.status(400).json({
                mensagem: "Sinto muito, infelizmente não foi possível atualizar os seus dados. Verifique se digitou corretamente a resposta de segurança."
            })
        } catch (error) {
            return res.status(404).send({ message: error.message });
        }
    }


const remove = async(req, res) => {

    const {security_response} = req.body

        try {
    
            const user = await User.findOne({security_response: security_response});
           
            await user.delete()
    
            res.status(200).send("Cadastro deletado com sucesso!")
        
        }
        
         catch (error) {
             res.status(500).json({
            message: error.message
        })

    }
}  


const login = async(req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.findOne({ email: email })

        if(!user){
            return res.status(422).send({ message: "Infelizmente o e-mail digitado não foi localizado."})
        }
    
        const checkPassword = await bcrypt.compare(password, user.password)
    
        if(!checkPassword){
            return res.status(422).send({ message: "Senha incorreta." })
        }
        
        //gerar um token (autenticacão) quando tiver validado a senha e o e-mail da pessoa, para ela conseguir logar (acessar uma rota)
        const secret = process.env.SECRET 
        const token = jwt.sign({ id: user._id}, secret )

        res.status(200).json({
            message: "Token funfou",
            token
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = {
    getAll,
    register,  
    update,
    remove,
    login
}