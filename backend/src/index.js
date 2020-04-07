const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();

mongoose.connect(
    "mongodb+srv://omnistack:omnistack@omnistack-mhbna.mongodb.net/semana10?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Métodos HTTP: GET, POST, PUT, DELETE
// Query Params re.query -> (quase sempre usado em GET para buscar ou filtrar, ordenar)
// Route params: req.params -> (Identificar um recuro, na alteração ou remoção )
// Body Params: req.ody -> dados para a criacao ou alteracao de um registro

// app.get("/users", (req, res) => {
//     console.log(req.query);
//     return res.json({ message: "olaaaa" });
// });

// app.delete("/users/:id", (req, res) => {
//     console.log(req.params);
//     return res.json({ message: "olaaaa" });
// });

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
