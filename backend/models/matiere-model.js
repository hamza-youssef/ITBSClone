var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'itbs'
  });

  
module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM matiere';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        let sql = 'SELECT * FROM matiere WHERE id_matiere = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (matiere,next)=>{
        let sql = 'INSERT INTO matiere SET ?'
        db.query(sql,matiere,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,matiere,next)=>{
        let sql = `UPDATE matiere SET nom_matiere=? WHERE id_matiere=?`

        db.query(sql,[matiere.nom_matiere,id],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM matiere WHERE id_matiere=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}