
const db = require('./db.js'); 
const app = require('./server');
const port = process.env.PORT || 3000;

db.sync()  
  .then(function(){
    app.listen(port, function () {
        console.log(`Server now listening on port ${port}`);
        })
  })