const { user } = require('../../models');
const { hashPassword } = require('../../auth/bcrypt');

class registerController {

    static register(req, res) {
        const { email, password } = req.body;
        let status = true;
        let message = [];
        
        if (email == "") {
            status = false;
            message.push("Email tidak boleh kosong!");
        }

        if (password == "") {
            status = false;
            message.push("Password tidak boleh kosong!");
        }

        if (status) {
            const payload = {
                email: email,
                password: hashPassword(password)
            };
            
            user.create(payload)
                .then((data) => {
                    message.push("Registrasi Berhasil");
                    res.status(200).json({ status: status, message: message, data:data });
                })
                .catch((err) => {
                    status = false;
                    message.push("Terjadi Kesalahanpada Koneksi Database!");
                    res.status(400).json({ status: status, message: message, err: err });
                });
        }
        else {
            res.status(400).json({ status: status, message: message });
        }
    }

}

module.exports = registerController;