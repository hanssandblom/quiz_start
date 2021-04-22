var express = require("express")
var app = express()
var cors = require('cors')
var db = require("./database.js")

app.use(cors())
app.use(express.static('public'))

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var HTTP_PORT = 3000

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/api/city", (req, res, next) => {
    var sql = "select * from city"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "city":rows
        })
      });
});


app.get("/api/city/:id", (req, res, next) => {
    var sql = "select * from city where cityId = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "city":row
        })
      });
});


app.post("/api/city/", (req, res, next) => {
    var errors=[]
    if (!req.body.cityPopulation){
        errors.push("No info about population");
    }
    var data = {
        cityName: req.body.cityName,
        cityPopulation: req.body.cityPopulation
    }
    var sql ='INSERT INTO city (cityName, cityPopulation) VALUES (?,?)'
    var params =[data.cityName, data.cityPopulation]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "city": data,
            "id" : this.lastID
        })
    });
})

app.put("/api/city/:id", (req, res, next) => {
    var data = {
        cityName: req.body.cityName,
        cityPopulation: req.body.cityPopulation
    }
    var sql ='UPDATE city SET cityName = ?, cityPopulation = ? WHERE cityId = ?'
    var params =[data.cityName, data.cityPopulation, req.params.id]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "city": data,
            "id" : this.lastID
        })
    });
})

app.delete("/api/city/:id", (req, res, next) => {
    db.run(
        'DELETE FROM city WHERE cityId = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", rows: this.changes})
    });
})

// Root path
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

