import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

export default function GameDelete(){
    const {id} = useParams()
    const [game, setGame] = useState({})
    const [status, setStatus] = useState('')
    const [botaoStatus, setBotaoStatus] = useState(true)

    // Obtem o objeto
    useEffect(() =>{           
            async function consult() {
                const response = await axios.get(`http://localhost:8000/api/games/${id}`)
                console.log(response.data)

                setBotaoStatus(response.false)
            }

            consult();
    },[])

    // Chama a função da API
    async function confirm() {
        try{
            const response = await axios.delete(`http://localhost:8000/api/games/${id}`)
            setStatus("Game excluded")
            setGame({})
        } catch(error){
            setStatus(`Fail: ${error}`)
        }
    }

    //Exibi mensagem de exclusão
    return (
        <div>
            <h3>{game.name}</h3>
            { status != 'Game excluded' ? <button onClick={confirm} disabled={botaoStatus}>Confirm deletion</button> : "Game not Excluded"}
            <Link to="/game">Back</Link>
            <h3>{status}</h3>
        </div>
    )

}