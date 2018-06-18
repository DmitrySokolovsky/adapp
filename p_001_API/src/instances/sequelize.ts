import { Sequelize } from 'sequelize-typescript';
import { Customer } from '../models/customer-models';
import 'reflect-metadata';

const connectionString: string = 'postgres://postgres:Dimmy_1989_guNN@localhost/addappdb';

const sequelize = new Sequelize(connectionString);
sequelize.addModels([Customer]);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});
