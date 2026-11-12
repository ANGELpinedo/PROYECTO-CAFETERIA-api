const express = require("express"); //es la forma clasica de importar express con node
const swaggerUi = require("swagger-ui-express");
const openapi = require("./docs/openapi.js");
const app = express();
const PORT = process.env.PORT || 3000;

//Documentacion de la API
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapi));

//req(request) res(response) res.json(respuesta en formato JSON)
//arrow function
app.get("/api/saludo", (req, res) => {
res.json({ mensaje: "Hola desde mi API" });
});

app.listen(PORT, ()=> console.log("API lista"));