var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "city.db"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE city (
            cityId INTEGER PRIMARY KEY,
            cityName TEXT,
            cityPopulation TEXT
            )`,(err) => {
        if (err) {
            // Table already created
        }else{
            // Table just created, creating some rows
            var insert = 'INSERT INTO city (cityName, cityPopulation) VALUES (?,?)'
            db.run(insert, ["Paris","2.2m"])
        }
    })  
    }
})


module.exports = db

