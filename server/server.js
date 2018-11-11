const express = require('express');
const app = express();
const redditRouter = require('./config/routes');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

/////////////////////////////////////////
//////// CORS STUFF ///////////////////////
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

/*Express body-parser middleware stuffs */

app.use(bodyParser.json());
// app.use(express.urlencoded({extended: false }));
// app.use(express.json());

app.use(redditRouter);
// app.use('/api', redditRouter);

/* To set static file Dir stuff*/
// app.use(express.static(__dirname + '/public'));
app.use(express.static('/public', {root: __dirname}));

/////////////////////////////////////////////////////////////
/////////HTML endpoint stuff/////////////////////////////////
app.get('/', (req, res) => {
    res.send('<h1>Hasta La Vista Baby</h1>');;
    //res.sendFile('views/index.html', {root: __dirname });
})

//////////////////////////////////////////////////////////////
///////////API endpoint stuff/////////////////////////////////
// app.use('/api/contacts', contactsRouter);
// app.use('/api/test', testRouter);

//////////////////////////////////////////////////////////////
///////////Run server stuff/////////////////////////////////
app.listen(port, () => console.log(`Server running!!! ;) ice hott on port ${port}...`));