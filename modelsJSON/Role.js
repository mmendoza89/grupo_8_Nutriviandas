const fs = require('fs');

//Not editable default roles are: 1. owner, 2. admin, 3.guest.
//guest is default role.
//owner is superAdmin

const User = {
    fileName: './data/user-roles.json',
    defaultRole: "guest",
    superAdmin: "owner",
    admin: "admin",
    getDefaultRoleName: function(){
        return this.defaultRole;
    },
    getSuperAdminName : function(){
        return this.superAdmin;
    },
    getAdminName: function(){
        return this.admin;
    },
    findAll: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    findByPk: function(id){
        let allRoles = this.findAll();
        let roleFound = allRoles.find(aRole => aRole.id == id);
        return roleFound;
    },

    create: function(categoryData) {
        let allRoles = this.findAll();
        let newCategory = {
            id: Date.now(), //It will be autoincrement in real DB
            ...categoryData
        }
        allRoles.push(newCategory);
        fs.writeFileSync(this.fileName, JSON.stringify(allRoles, null, ' '));
        return newCategory;
    },

    delete: function(id) {
        let allRoles = this.findAll();
        let foundCategory = allRoles.filter(aRole => aRole.id !== id);
        foundCategory.valid = false;
        fs.writeFileSync(this.fileName, JSON.stringify(foundCategory, null, ' '));
        return true;
    }
}

module.exports = User;