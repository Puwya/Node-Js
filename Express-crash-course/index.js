const express = require('express');
const path = require('path');
const members = require('./members');
const Logger = require('./middleware/Logger');

const app = express();

// init custom middleware
app.use(Logger);

app.get('/api/members', (req, res) => res.json(members));

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
