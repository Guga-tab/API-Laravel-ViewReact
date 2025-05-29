import Home from "./Paginas/Home"
import Sobre from "./Paginas/Sobre"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout /> }>
                    <Route index element={ <Home/> } />
                    <Route path="sobre" element={ <Sobre/> } />
                    <Route path="*" element={ <h1>Inexistente</h1> } /> {/* Comentário: rota inexistente */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}