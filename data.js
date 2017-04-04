let data = [{
    name: 'dude',
    age:23,
    height: '5-11'
},
    {
        name: 'dude7',
        age:29,
        height: '7-11'
    },
    {
        name: 'dude4',
        age:22,
        height: '6-11'
    }];




let places = [];








module.exports = {
    getData: function (req, res) {
        res.json(data);
    },
    postData : function (req,res) {
        res.json(data.push(req.body));
    },
    deletePerson : function (req, res) {
        res.json(data.pop());
    },
    getHomePic : function (req, res) {
        res.json(homePic);
    },
    addPlace: function (req,res) {
        res.json(places.push(req.body));
    },
    getPlaces : function (req, res) {
        res.json(places);
    },
    deletePlace: function (req,res) {
        res.json(places.pop());
    }
}
