var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "itbs",
});

module.exports = {
  selectByGroupe: async (groupe, next) => {
    let sql =
      "SELECT users.name,matiere.nom_matiere FROM prof_mat join matiere on prof_mat.id_matiere=matiere.id_matiere join users on prof_mat.id_prof=users.id join groupe on prof_mat.id_groupe=groupe.id_groupe where groupe.nom_groupe=?";
    db.query(sql, groupe, (err, result) => {
      if (err) throw err;
      next(result);
    });
  },
  selectByProf: async (id_prof, next) => {
    let sql =
      "SELECT users.name,matiere.nom_matiere FROM prof_mat join matiere on prof_mat.id_matiere=matiere.id_matiere join users on prof_mat.id_prof=users.id where users.id=?";
    db.query(sql, id_prof, (err, result) => {
      if (err) throw err;
      next(result);
    });
  },
  insert: async (prog, next) => {
    let sql = "INSERT INTO prof_mat SET ?";
    db.query(sql, prog, (err, result) => {
      if (err) throw err;
      next(result);
    });
  },

  //******************************************* */ Update Prof Matiere ********************************************** */
  // update : async (id,prog,next)=>{
  //     let sql = `UPDATE prof_mat SET id_matiere=? WHERE id=?`

  //     db.query(sql,[prog.id_matiere,id],(err, result) => {
  //         if (err) throw err;
  //         next(result)
  //     })
  // },
  //******************************************* */ Update Prof Matiere ********************************************** */

  delete: async (id, next) => {
    let sql = `DELETE FROM prof_mat WHERE id=${id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      next(result);
    });
  },
};
