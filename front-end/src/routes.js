import React from "react";
import {Route, Routes} from 'react-router-dom';

import Inicio from './pages/Inicio/Inicio.js'
import Login from './pages/Login/Login.js'
import CadastroAluno from './pages/CadastroAluno/cadastroAlunoPage.js'
import CadastroServidor from './pages/CadastroServidor/cadastroServidor.js'
import Contratos from './pages/Contratos/contratos.js'
import Perfil from './pages/Contratos/contratos.js'
import Vagas from './pages/Vagas/vagas.js'


const MyRoutes = () => {
    return(
        <Routes>
            {<Route path="/" element={<Inicio />} exact />}
            {<Route path="/login" element={<Login />} exact />}
            {<Route path="/cadastroAluno" element={<CadastroAluno/>} exact />}
            {<Route path="/cadastroServidor" element={<CadastroServidor/>} exact />}
            {<Route path="/contratos" element={<Contratos/>} exact />}
            {<Route path="/Perfil" element={<Perfil/>} />}
            {<Route path="/Vagas" element={<Vagas/>} />}
        </Routes>
    )
}

export default MyRoutes;