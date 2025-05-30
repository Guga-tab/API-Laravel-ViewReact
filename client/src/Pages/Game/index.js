import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Game(){
    const [games, setGames] = useState([])

    //A função executa o primeiro parâmetro do useEffect pois o vetor do segundo parâmetro é vazio.
    useEffect(
        function(){
            
            async function consult() {
                const response = await axios.get("http://localhost:8000/api/games")
                console.log(response)

                setGames(response.data)
            }

            consult();
        }
        ,[]
    )

    // retorna tabela HTML contendo os dados dos produtos obtidos na API
    return (
        <div>
            <Link to='/game/create'>New</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>rentValue</th>
                        <th>platform</th>
                        <th>genre</th>
                        <th>releaseDate</th>
                        <th>isRented</th>
                    </tr>
                </thead>
                <tbody>
                    {games==null ? null : games.map(
                        (game) => 
                            <tr key={game.id}>
                            <td>{game.name}</td>
                            <td>{game.price}</td>
                            <td>{game.rentValue}</td>
                            <td>{game.platform}</td>
                            <td>{game.genre}</td>
                            <td>{game.releaseDate}</td>
                            <td>{game.isRented}</td>
                            <td><Link to={"/game/update/" + game.id}>Update</Link></td>
                            <td><Link to={"/game/delete/" + game.id}>Delete</Link></td>
                            </tr>)
                    }
                </tbody>
            </table>
            <Link to="/">Back</Link>
        </div>
    )
}