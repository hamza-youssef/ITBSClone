var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'itbs'
  });

  
module.exports = {
    selectByGroupe : async (groupe,next)=>{
        let sql = 'SELECT matiere.nom_matiere FROM programme join matiere on programme.id_matiere=matiere.id_matiere join groupe on programme.id_groupe=groupe.id_groupe where groupe.nom_groupe=?';
        db.query(sql,groupe, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    insert : async (prog,next)=>{
        let sql = 'INSERT INTO programme SET ?'
        db.query(sql,prog,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,prog,next)=>{
        let sql = `UPDATE programme SET id_matiere=? WHERE id_prog=?`

        db.query(sql,[prog.id_matiere,id],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM programme WHERE id_prog=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}