import * as passport from 'passport';
import { ExtractJwt } from 'passport-jwt';
import * as passportJWT from 'passport-jwt';
import { Customer } from '../models';

const Strategy = passportJWT.Strategy;

const params = {
    secretOrKey: 'feed',
    jwtFromRequest: ExtractJwt.fromBodyField('token')
};

passport.use(new Strategy(params, (payload, done) => {
    console.log(payload, "passport.js");
    Customer.findOne({
        where: {
            name: payload
        }
    }).then(result => done(null, { name: result.name })).catch(err => done(err, null));
}));
