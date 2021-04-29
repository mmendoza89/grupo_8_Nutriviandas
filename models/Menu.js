const fs = require('fs');

const Menu = {
    fileName: './data/menus.json',

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateID: function() {
        let allMenus = this.findAll();
        let lastMenu = allMenus.pop();
        if(lastMenu){
            return lastMenu.id + 1;
        } else {
            return 1;
        }
    },

    findAll: function() {
        return this.getData();
    },

    findByPk: function (menuId) {
        let menuFile = fs.readFileSync(filePath);
        let menus = JSON.parse(menuFile);
        let menu = menus.find((item) => {
          return item.id == menuId;
        });
        return menu;
      },

    findByField: function(field, text){
        let allMenus = this.findAll();
        let menuFound = allMenus.find(aMenu => aMenu[field] == text);
        return menuFound;
    },

    create: function(menuData) {
        let allMenus = this.findAll();
        let newMenu = {
            id: this.generateID(),
            ...menuData
        }
        allMenus.push(newMenu);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newMenu;
    },

    delete: function(id) {
        let allMenus = this.findAll();
        let finalMenus = allMenus.filter(aMenu => aMenu.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalMenus, null, ' '));
        return true;
    }
}

module.exports = Menu;