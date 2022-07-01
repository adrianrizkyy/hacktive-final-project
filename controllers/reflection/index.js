const { reflection } = require('../../models');

class reflectionController {

    static get_reflections(req, res) {
        let status = true;
        let message = [];

        if (req.token.email == "") {
            status = false;
            message.push("Email tidak boleh kosong!");
        }

        reflection.findAll({ where: { owner_id: req.token.email } })
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

    static create_reflection(req, res) {
        const { success, low_point, take_away } = req.body;
        let status = true;
        let message = [];

        if (success == "") {
            status = false;
            message.push("Success tidak boleh kosong!");
        }

        if (low_point == "") {
            status = false;
            message.push("Low Point tidak boleh kosong!");
        }

        if (take_away == "") {
            status = false;
            message.push("Take Away tidak boleh kosong!");
        }

        if (req.token.email == "") {
            status = false;
            message.push("Owner Id tidak boleh kosong!");
        }

        if (status) {
            const payload = {
                success: success,
                low_point: low_point,
                take_away: take_away,
                owner_id: req.token.email,
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            reflection.create(payload)
                .then((data) => {
                    message.push("Create reflection Berhasil");
                    res.status(200).json({ status: status, message: message, data: payload });
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

    static update_reflection(req, res) {
        const { success, low_point, take_away } = req.body;
        const id = req.params.id;
        
        let status = true;
        let message = [];

        if (success == "") {
            status = false;
            message.push("Success tidak boleh kosong!");
        }

        if (low_point == "") {
            status = false;
            message.push("Low Point tidak boleh kosong!");
        }

        if (take_away == "") {
            status = false;
            message.push("Take Away tidak boleh kosong!");
        }

        if (req.token.email == "") {
            status = false;
            message.push("Owner Id tidak boleh kosong!");
        }

        if (status) {
            const payload = {
                success: success,
                low_point: low_point,
                take_away: take_away,
                owner_id: req.token.email,
                updatedAt: new Date(),
            };
            console.log(payload);
            reflection.update(payload, {where: {id: id, owner_id: req.token.email}})
                .then((data) => {
                    message.push("Update reflection Berhasil");
                    res.status(200).json({ status: status, message: message, data: payload });
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
  

    static delete_reflection(req, res) {
        const id = req.params.id;
        let status = true;
        let message = [];

        if (id == "") {
            status = false;
            message.push("Id tidak boleh kosong!");
        }

        if (req.token.email == "") {
            status = false;
            message.push("Owner Id tidak boleh kosong!");
        }

        if (status) {
            reflection.destroy({ where: { id: id, owner_id: req.token.email } })
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

module.exports = reflectionController;