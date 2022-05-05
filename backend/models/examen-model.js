var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'itbs'
  });

  
module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM examen';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        let sql = 'SELECT * FROM examen WHERE id_examen = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (examen,next)=>{
        let sql = 'INSERT INTO examen SET ?'
        db.query(sql,examen,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,examen,next)=>{
        let sql = `UPDATE examen SET date=? WHERE id_examen=?`

        db.query(sql,[examen.date,id],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM examen WHERE id_examen=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}