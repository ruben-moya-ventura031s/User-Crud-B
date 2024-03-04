const catchError = require('../utils/catchError');
const UserCrud = require('../models/UserCrud');

const getAll = catchError(async(req, res) => {
    const usersCrud = await UserCrud.findAll()
    return res.json(usersCrud)
});

const create = catchError(async(req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;
    const userCrud = await UserCrud.create({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        birthday: birthday,
    });
    return res.status(201).json(userCrud)
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await UserCrud.destroy({ where: { id: id }})
    return res.sendStatus(204);
});

const getOne = catchError(async(req, res) => {
        const { id } = req.params;
        const userCrud = await UserCrud.findByPk(id);
        return res.json(userCrud);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password, birthday } = req.body;
    const userCrud = await UserCrud.update({
        first_name, last_name, email, password, birthday
    }, { where: { id: id }, returning: true });
    return res.json(userCrud[1][0]);
});


module.exports = {
    getAll,
    create,
    remove,
    getOne,
    update,
}