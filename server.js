const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const HolidayAPI = require('node-holidayapi');
const hapi = new HolidayAPI('b195107a-422e-4c20-bc08-27781e17a9a1').v1;
let holidaysList;
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
var parameters = {
    // Required
    country: 'US',
    year: 2015,
    // Optional
    // month:    7,
    // day:      4,
    // previous: true,
    // upcoming: true,
    // public:   true,
    // pretty:   true,
};

hapi.holidays(parameters, function (err, data) {
     holidaysList = data;    
});

app.get('/api/holidays-list', function (req, res) {
    res.send({data: holidaysList});
});


// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running `));
