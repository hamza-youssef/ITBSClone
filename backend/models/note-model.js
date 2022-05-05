var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'itbs'
  });

  
module.exports = {
   
    selectById : async (id,next)=>{
        let sql = 'SELECT users.name,matiere.nom_matiere,examen.type,examen.date,note.note FROM note join examen on examen.id_examen=note.examen join matiere on matiere.id_matiere=examen.id_mat join users on users.id=note.id_etudiant WHERE users.id = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (note,next)=>{
        let sql = 'INSERT INTO note SET ?'
        db.query(sql,note,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,note,next)=>{
        let sql = `UPDATE note SET note=? WHERE id_note=?`

        db.query(sql,[note.note,id],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM note WHERE id_note=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}