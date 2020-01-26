import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config.json';

import bloodBankRoutes from "./modules/blood_bank/bloodBankRoutes";


let app = express();
app.server = http.createServer(app);


app.use(bodyParser.json({
    limit: config.bodyLimit
}));

app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
});

app.use("/bloodBank", bloodBankRoutes);


export default app;
