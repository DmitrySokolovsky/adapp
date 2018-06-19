import { Sequelize } from 'sequelize-typescript';

import { Customer } from '../models';

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
