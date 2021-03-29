const fs = require('fs');

const User = {
    fileName: './data/user-categories.json',

    findAll: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    findByPk: function(id){
        let allCategories = this.findAll();
        let categoryFound = allCategories.find(aCategory => aCategory.id == id);
        return categoryFound;
    },

    create: function(categoryData) {
        let allCategories = this.findAll();
        let newCategory = {
            id: Date.now(), //It will be autoincrement in real DB
            ...categoryData
        }
        allCategories.push(newCategory);
        fs.writeFileSync(this.fileName, JSON.stringify(allCategories
, null, ' '));
        return newCategory;
    },

    delete: function(id) {
        let allCategories = this.findAll();
        let foundCategory = allCategories.filter(aCategory => aCategory.id !== id);
        foundCategory.valid = false;
        fs.writeFileSync(this.fileName, JSON.stringify(foundCategory, null, ' '));
        return true;
    }
}

module.exports = User;