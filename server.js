const express = require('express')
const bodyParser = require('body-parser');
const sass = require('node-sass');

const app = express()
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  sass.middleware({
    src: __dirname + '/sass', //where the sass files are 
    dest: __dirname + '/public/css/', //where css should go
    debug: true // obvious
  })
);
app.set('view engine', 'ejs')
app.get('/', function (req, res) {
  res.render('index');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})