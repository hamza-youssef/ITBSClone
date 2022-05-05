var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'itbs'
  });

  
module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM groupe';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        let sql = 'SELECT * FROM groupe WHERE id_groupe = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (groupe,next)=>{
        let sql = 'INSERT INTO groupe SET ?'
        db.query(sql,groupe,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,groupe,next)=>{
        let sql = `UPDATE groupe SET nom_groupe=? WHERE id_groupe=?`

        db.query(sql,[groupe.nom_groupe,id],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM groupe WHERE id_groupe=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}