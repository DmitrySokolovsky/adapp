import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    database: 'adappdb',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    username: 'postgres',
    password: 'Dimmy_1989_guNN',
    modelPaths: [__dirname + '/models']
});
