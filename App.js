const express = require('express');
const path = require('path');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// app.post('/contact',(req,res)=>{
//     console.log(req.body);
//     res.sendFile(path.join(__dirname,'build','index.html'));
// });

app.listen(port, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});