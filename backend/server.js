const express = require('express')

const app = express();
app.use(express.json())

const auth = require('./routes/api/auth-api')
const users = require('./routes/api/users-api')
const matiere = require('./routes/api/matiere-api')
const groupe = require('./routes/api/groupe-api')
const note = require('./routes/api/note-api')
const prog = require('./routes/api/prog-api')
const profMat = require('./routes/api/prof-mat-api')
const examen = require('./routes/api/examen-api')
//const cors = require('cors');

app.use('/api/auth', auth)
app.use('/api/users', users)
app.use('/api/matiere', matiere)
app.use('/api/groupe', groupe)
app.use('/api/note', note)
app.use('/api/prog', prog)
app.use('/api/profmat', profMat)
app.use('/api/examen', examen)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))