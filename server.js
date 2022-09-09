const express = require("express");

const app = express();
var cors = require('cors');
app.use(cors());
const dbConfig = require('./db');

const eventsRoute = require('./routes/eventsRoute');
const usersRoute = require('./routes/usersRoute');
const bookingsRoute = require('./routes/bookingsRoute');
app.use(express.json())

app.use('/api/events',eventsRoute);
app.use('/api/users',usersRoute);
app.use('/api/bookings',bookingsRoute);
const port = process.env.PORT || 5000;

app.listen(port,() => console.log('node server started using nodemon'));