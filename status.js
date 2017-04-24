'use strict';
const fs = require('fs');
require('dotenv').config();

var pid = false;
if (process.env.PIDFILE) {
  try{
    pid = fs.readFileSync(process.env.PIDFILE).toString('utf8');
  }catch(e) {}
}

console.log(JSON.stringify({
  "example-1" : pid
}));
