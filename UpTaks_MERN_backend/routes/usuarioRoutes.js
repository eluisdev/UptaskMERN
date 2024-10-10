import express from 'express';
import { registrar, autenticar, confirmar, olvidePassword, comprobarToken, nuevoPassword, perfil } from '../controllers/usuarioController.js';
import checkAuth from '../middleware/checkAuth.js';
const router = express.Router();

//Autenticacion, Registro y Confirmacion de usuarios

router.post("/", registrar) //crea nuevo usuario
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
router.get("/olvide-password/:token", comprobarToken);
router.post("/olvide-password/:token", nuevoPassword);

router.get("/perfil", checkAuth,perfil);


// router.post("/olvide-password/:token").get(comprobarToken).post(nuevoPassword)
export default router;