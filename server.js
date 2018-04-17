const express = require('express')
const bodyParser = require('body-parser');
const sass = require('node-sass-middleware');
const app = express()
var port = process.env.PORT || 3000; //to configure the server to run on Azure.
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  sass({
    src: __dirname + '/public/sass',
    dest: __dirname + '/public/css',
    debug: true,
    indentedSyntax: false,
    outputStyle: 'compressed',
    prefix: '/css'
  })
);
app.set('view engine', 'ejs')
app.get('/', function (req, res) {
  res.render('index');
})

app.listen(port);
exports = module.exports = app;