const {Model} = require('objection');
const knex = require('../config/dbConfig');
Model.knex(knex);

class fine extends Model {
    static get tableName(){
        return 'finetable';
          
    }
    
}
module.exports =fine;