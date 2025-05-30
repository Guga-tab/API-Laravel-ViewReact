import Home from "./Pages/Home"
import About from "./Pages/About"
import Layout from "./Pages/Layout"
import Game from "./Pages/Game"
import GameCreate from "./Pages/Game/create"
import GameUpdate from "./Pages/Game/update"
import GameDelete from "./Pages/Game/delete"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout /> }>
                    <Route index element={ <Home/> } />
                    <Route path="about" element={ <About/> } />
                    <Route path="game" element={ <Game/> } />
                    <Route path="game/create" element={ <GameCreate/> } />
                    <Route path="game/update/:id" element={ <GameUpdate/> } />
                    <Route path="game/delete/:id" element={ <GameDelete/> } />
                    <Route path="*" element={ <h1>Non-existent</h1> } /> {/* Comentário: rota inexistente */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}