const User = require('../modelsJSON/User');
const UserRole = require('../modelsJSON/Role');

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