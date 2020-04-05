'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

console.log(PORT);
app.listen(PORT, ()=> console.log('server is listening on', PORT));
