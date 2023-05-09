const {Model} = require('objection');
const knex = require('../config/dbConfig');
Model.knex(knex);

class books extends Model {
    static get tableName(){
        return 'books';

    }
    static get jsonSchema() {
        return{
            type: 'object',
            properties:{
                id: {type:'integer'},
                name:{type: 'string'},
                author: {type: 'string'},
                category:{type:'string'},
                price:{type: 'integer'},
                totalBooks:{type:'integer'},
                booktaken:{type:"integer"}
            }
        }
    }
}

module.exports ={books};