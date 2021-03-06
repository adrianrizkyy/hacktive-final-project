const { user } = require('../../models');
const { hashPassword } = require('../../auth/bcrypt');

class userController {

    static get_users(req, res) {
        let status = true;
        let message = [];

        if (req.token.email == "") {
            status = false;
            message.push("Email tidak boleh kosong!");
        }

        user.findAll()
            .then((data) => {
                status = true;
                message.push("Berhasil Mengambil Data!");
                res.status(200).json({ status: status, message: message, data: data });
            })
            .catch((err) => {
                status = false;
                message.push("Terjadi Kesalahan Dalam Query!");
                res.status(200).json({ status: status, message: message, err: err });
            });
    }

    static create_user(req, res) {
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
                    message.push("Create User Berhasil");
                    res.status(200).json({ status: status, message: message, data: data });
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

    static update_password(req, res) {
        const { email, password } = req.body;
        let status = true;
        let message = [];

        if (req.token.email == "") {
            status = false;
            message.push("Email tidak boleh kosong!");
        }

        if (password == "") {
            status = false;
            message.push("Password tidak boleh kosong!");
        }

        if (status) {
            const payload = {
                password: hashPassword(password)
            };

            user.update(payload, { where: { email: req.token.email } })
                .then((data) => {
                    message.push("Update Password Berhasil");
                    res.status(200).json({ status: status, message: message, data: data });
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

    static delete_user(req, res) {
        const id = req.params.id;
        let status = true;
        let message = [];

        if (id == "") {
            status = false;
            message.push("Id tidak boleh kosong!");
        }

        if (status) {

            user.destroy({ where: { id: id } })
                .then((data) => {
                    message.push("Delete Data Berhasil");
                    res.status(200).json({ status: status, message: message, data: data });
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

module.exports = userController;