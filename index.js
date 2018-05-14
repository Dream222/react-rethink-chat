const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

require('./server/routes')(app);

app.use(express.static('./'));
app.listen(5000, () => console.log('App listening on port 5000'));
