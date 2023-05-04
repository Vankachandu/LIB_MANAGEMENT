const {Model} = require('objection');
const knex = require('../config/dbConfig');
Model.knex(knex);

class Users extends Model {
    static get tableName(){
        return 'users';

    }
    static get jsonSchema() {
        return{
            type: 'object',
            required: ['email'],
            properties:{
                id: {type:'integer'},
                name:{type: 'string'},
                email: {type: 'string'},
                address:{type:'string'},
                password:{type: 'string'},
                role:{type:'string'},
                phonenumber:{type:"number"}
            }
        }
    }
}

module.exports = Users;