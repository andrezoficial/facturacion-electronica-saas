const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const conectarDB = require('./config/db');

dotenv.config();
conectarDB();

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
const rutas = require('./routes');
app.use('/api', rutas);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
