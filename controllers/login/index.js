const { user } = require('../../models');
const Sequelize = require('sequelize');
const { comparePassword } = require('../../auth/bcrypt');
const { generateToken } = require('../../auth/jwt');

class loginController {

    static do_login(req, res) {
        const { email, password } = req.body;
        user.findOne({ where: { email: email }, raw: true })
            .then((data) => {
                const response = comparePassword(password, data.password);
                if (response) {
                    const token = generateToken({data});
                    res.status(200).json({ status: true, message: 'Berhasil Login!', error: null, token: token });
                }
                else {
                    res.status(200).json({ status: false, message: 'Email atau Password Salah!', error: null, token: null });
                }
            })
            .catch((err) => {
                res.status(400).json({ status: false, message: 'Email Tidak Terdaftar!', error: err, token: null });
            });
    }
}

module.exports = loginController;