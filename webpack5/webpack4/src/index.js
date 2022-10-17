const modulesFiles = require.context("./demo", true, /\.js$/);



console.log("123", modulesFiles.keys());
