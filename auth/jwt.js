const jwt = require("jsonwebtoken");
const SECRET_KEY = "inirahasia";

const generateToken = function(payload){
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1 days' });
    
    return token;
};

const verifyToken = function(token){
    const decodeds = jwt.verify(token, SECRET_KEY, function(err, decoded){
        if(err){
            return err;
        }

        return decodeds;
    });
}

module.exports = {generateToken, verifyToken};