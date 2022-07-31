const express = require('express');
const path = require('path');
// const Logger = require('./middleware/Logger');

const app = express();

// init custom middleware
// app.use(Logger);

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
