const bcrypt = require('bcryptjs');
const crypto = require('crypto');
var uuid = require('uuid');
var path = require('path');
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('users.json')
var db = low(adapter);

require('dotenv').config();


const signup = async (req, res) => {

    
    try {  
        const { email, password, phoneNumber, avatarURL, fullName, balance, age, eyeColor, company, address} = req.body;
        const guid = crypto.randomUUID();
        const userId = crypto.randomBytes(16).toString('hex');
        const hashedPassword = await bcrypt.hash(password, 10);
         var salt = bcrypt.genSaltSync(10);
         db.get('users')
             .push({
                 _id: userId,
                 // creates random id
                 guid: guid,
                 // creates hash Password
                 password: hashedPassword,
                    isActive: true,
                  balance: balance,
                 picture: avatarURL,
                  age: age,
                  eyeColor: eyeColor,
                 name: fullName,
                  company: company,
                 email: email,
                 salt: salt,
                 phone: phoneNumber,
                  address: address
             })
             .write()
         res.status(200).json({ email:email, phoneNumber:phoneNumber,picture:avatarURL,name: fullName, _id: userId,guid: guid,});


    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
};


const login = async (req, res) => {
    try {
        
        const { email, password } = req.body;
        console.log(req.body);
         var user = db.get('users').find({email: email}).value()

        if (!user) return res.status(400).json({ message: 'User not found' });
        
        const success = await bcrypt.compare(password, user.password);
        console.log(success);
        if (success) {
            res.status(200).json({ name: user.name, email: user.email, guid: user.guid, _id: user._id, phone:user.phone });

        } else {
            res.status(500).json({ message: 'Incorrect password' });

        }
    } catch (error) {
        
        res.status(500).json({ message: error })
    }
};

const get = async (req, res) => {
    
    try {
        var user = db.get('users').find({ guid: req.query.ID }).value()
        if (user) {
            return res.status(200).json({ user })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
};

const update = async (req, res) => {
    
    try {
        const { email, phoneNumber, avatarURL, fullName, balance, age, eyeColor, company, address } = req.body
        let user = db.get("users").find({ email: req.body.email }).value();
        if (user) {
            let updatedUser = db.get("users")
                .find({ _id: user._id })
                .assign({
                    isActive: true,
                    balance: balance,
                    picture: avatarURL,
                    age: age,
                    eyeColor: eyeColor,
                    name: fullName,
                    company: company,
                    email: email,
                    phone: phoneNumber,
                    address: address
                })
                .write();
            
                if (updatedUser) {
                    return res.status(200).json({ name: updatedUser.name, email: updatedUser.email, guid: updatedUser.guid, _id: updatedUser._id, phone: updatedUser.phone });
                }
        }
        console.log(user);
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
}



module.exports = { signup, login,get,update }
