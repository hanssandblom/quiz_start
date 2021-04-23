var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "stad.db"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE stad (
            bokId INTEGER PRIMARY KEY,
            stadNamn TEXT,
            stadByggnad TEXT
            )`,(err) => {
        if (err) {
            // Table already created
        }else{
            // Table just created, creating some rows
            var insert = 'INSERT INTO stad (stadNamn, stadByggnad) VALUES (?,?)'
            db.run(insert, ["Paris","Eifeltornet"])
        }
    })  
    }
})


module.exports = db

