import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as pg from 'pg';

const app = express();

const connectionString: string = 'postgres://postgres:Dimmy_1989_guNN@localhost/addb';
const qStrInsert: string = 'INSERT INTO customers (name,age) VALUES ($1,$2)';
const qStrSelect: string = 'SELECT * FROM customers';

app.use(bodyParser.json());

const client = new pg.Client({
    connectionString: connectionString
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req: express.Request, res: express.Response , next: Function): void => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/users', (req, res, next) => {
    const name = req.body.name;
    const age = req.body.age;
    client.connect();
    client.query(qStrInsert, [name, age], (err, result) => {
        
        if (err) {
            console.log(err.stack);
        } else {
            res.sendStatus(200);
        }
        client.end();
    });
});

app.get('/users', (req, res, next) => {
    client.connect();
    client.query(qStrSelect, [], (err, result) => {
        
        if (err) {
            console.log(err.stack);
        } else {
            res.json(result.rows);
        }
        client.end();
    });
});

app.listen(3000, () => {
    console.log('listening 3000');
});
