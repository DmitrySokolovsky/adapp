import { Sequelize } from 'sequelize-typescript';

import { Customer } from '../models';

//const connectionString: string = 'postgres://postgres:Dimmy_1989_guNN@localhost/addappdb';

export const sequelize = new Sequelize({
    database: 'addappdb',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    username: 'postgres',
    password: 'sokill666',
    modelPaths: [__dirname + '/models']
});
