const data = require('./data');
const express =require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/api/getdata', data.getData);
app.post('/api/postdata', data.postData);
app.delete('/api/deleteperson', data.deletePerson);
app.get('/api/gethomedata', data.getHomePic);
app.post('/api/addplace', data.addPlace);
app.get('/api/getplaces', data.getPlaces);
app.delete('/api/deleteplace', data.deletePlace);


app.listen(3023, function () {
    console.log('listening on port 3023');
});
