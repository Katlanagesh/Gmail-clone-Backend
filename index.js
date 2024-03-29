import express from 'express'
import Connection from './database/db.js'
import cors from 'cors';
import routes from './routes/route.js';

const app = express()
app.use(cors())
// app.use(express.urlencoded());
app.use(express.json());
app.use('/', routes);

const PORT= 8000

Connection();
app.listen(PORT, ()=>console.log(`server started on PORT ${PORT}`)) 