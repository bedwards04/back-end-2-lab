const express = require('express');
const app = express();
const cors = require('cors');
const ctrl = require('./controller');
const { getHouses, createHouse, updateHouse, deleteHouse } = ctrl;

app.use(express.json());
app.use(cors());

app.get('/api/houses', getHouses);
app.delete('/api/houses/:id', deleteHouse);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);

const SERVER_PORT = 4004;
app.listen(SERVER_PORT, function() {console.log(`Server is running on port ${SERVER_PORT}`)});