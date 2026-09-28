const {Router} = require("express");

const enrutadorAuth = Router();
const {iniciarSesion, registrarse} = require("../controllers/autenticarController")
//importacion del controlador

//ruta de regitro en el sistema
enrutadorAuth.post("/registro", registrarse);

//ruta de inicio de sesion en el sistema
enrutadorAuth.post("/login", iniciarSesion)

//se realiza todas las rutas, con (POST, GET, PUT, DELETE)
module.exports = enrutadorAuth;