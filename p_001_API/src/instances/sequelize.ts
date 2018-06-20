import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    database: 'addappdb', // at home version = adappdb
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    username: 'postgres',
    password: 'sokill666', // at home version = my password
    modelPaths: [__dirname + '/models']
});
