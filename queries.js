const database = require("./database-connection");

module.exports = {
    list(){
        return database('coffee').orderBy('id')
    },
    read(id){
        return database('coffee')
            .where('id', id)
            .then(student => student[0])
    },
    create(coffee){
        return database('coffee')
            .insert(coffee, '*')
            .then(student => student[0])
    },
    update(id, coffee){
        return database('coffee')
            .where('id', id)
            .update(coffee, '*')
            .then(coffee => coffee[0])
    },
    delete(id){
        return database('coffee')
            .where('id', id)
            .del()
    }
};
