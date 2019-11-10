let express = require('express');
let app = express();
let port = 3000;
let pageSize = 5;
let student = [];
let contant = './student.txt';
let fs = require('fs');
//app.use(express.static('public'))
fs.readFile(contant, 'utf-8', (err, data) => {
    if (err) { 
        console.log('hvhvch');
    } else {
        //    students =data.split('\n');
        student = JSON.parse(data);
        //  console.log(student);
    }
})

app.get("/students", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    let page = req.query.page;
    start = (page - 1) * pageSize;
    end = start + pageSize;
    console.log(student);
    res.send(student.slice(start, end));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));