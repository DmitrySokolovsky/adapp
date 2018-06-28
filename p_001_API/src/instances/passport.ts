import * as passport from 'passport';
import * as local from 'passport-local';
import { CustomerAddModel, Customer, CustomerLoginModel } from '../models';

const LocalStrategy = local.Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, cb) => {
    return Customer.findOne({
        where: {
            email: email,
            password: password
        }
    }).then(customer => {
        if (!customer) {
            return cb(null, false, { message: 'Incorrect email or password'});
        }

        return cb(null, customer, { message: 'Logged in successfully' });
    }).catch(err => cb(err));
}));
