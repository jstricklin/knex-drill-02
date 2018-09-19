const database = require("./database-connection");

module.exports = {
    list(){
        return database('coffee').orderBy('id')
    },
    read(id){
    },
    create(coffee){
    },
    update(id, coffee){
    },
    delete(id){
    }
};
