const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000


app.get('/', function(req,res) {
    res.sendFile('index.html', {root: __dirname});
});

app.post('/add_user', function(req,res) {
        
    var bd = "";
    
    req.on("data", function(chunk) {
        bd += chunk.toString();    
    })

    req.on("end", function() {
        console.log('data:',bd)
        res.end('ok');

    });

    //res.end("huhu");
});

app.listen(PORT, () => {
  console.log('Server is running on PORT:',PORT);
});