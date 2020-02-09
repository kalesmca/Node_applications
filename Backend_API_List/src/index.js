import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config.json';

import bloodBankRoutes from "./modules/blood_bank/bloodBankRoutes";


let app = express();
app.server = http.createServer(app);
app.get('/', function (req, res) {
    res.send();
});
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json({
//     limit: config.bodyLimit
// }));

app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
});

app.use("/bloodBank", bloodBankRoutes);


export default app;
