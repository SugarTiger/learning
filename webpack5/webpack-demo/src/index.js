const buffer = require('buffer')
window.Buffer = buffer;
const process = require("process/browser")
const path = require("path");
const fwdStream = require('fwd-stream')
import './hello.js';
const m1 = require("./m1")
m1();


console.log('index',require.context,path,process)