const User = require('../models/User');
const UserRole = require('../models/Role');

const userRoleController = {
    index: (req, res) => {
        const allRoles = UserRole.findAll();
        const editableRoles = allRoles.filter((role) => {
            return role.editable;
        });
        res.send(editableRoles);
    },
    create: (req, res) => {
        res.send("roles create");

    },
    edit: (req, res) => {
        res.send("roles edit");

    },
    delete: (req, res) => {
        res.send("roles delete");
    
    }
}

module.exports = userRoleController;