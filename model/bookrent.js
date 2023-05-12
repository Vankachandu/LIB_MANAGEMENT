const {Model} = require('objection');
const knex = require('../config/dbConfig');
Model.knex(knex);

class bookrent extends Model {
    static get tableName(){
        return 'bookrent';
          
    }
    static get jsonSchema() {
        return{
            type: 'object',
            properties:{
                id: {type:'integer'},
                userid:{type: 'integer'},
                bookid: {type: 'integer'},
               
            }
        }
    }
}
module.exports =bookrent;