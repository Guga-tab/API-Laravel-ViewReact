import axios from "axios"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"

export default function GameCreate(){
    // Exibi mensagem ao usuário
    const [status, setStatus] = useState("")

    // Armazena dados digitados pelo usuário
    const name = useRef("")
    const price = useRef("")
    const rentValue = useRef("")
    const platform = useRef("")
    const genre = useRef("")
    const releaseDate = useRef("")
    const isRented = useRef("")

    // Formulário para coleta de dados
    return (
        <div>
            <form onSubmit={ record }>
                name: <input ref={name} type="text" maxlength={"100"} required />
                price: <input ref={price} type="number" step="0.01" required />
                Rent Value: <input ref={rentValue} type="number" step="0.01" required />
                Platform: <input ref={platform} type="text" maxlength={"100"} required />
                Genre: <input ref={genre}  type="text" maxlength={"100"} required />
                Release Date: <input ref={releaseDate} type="date" required />
                Rented: <input ref={isRented} type="checkbox" />
                <button type="submit">Submit</button>
            </form>
            <h3>{status}</h3>
            <Link to="/game">Back</Link>
        </div>
    )

    // Chama a função da API
    async function record(e) {
        e.preventDefault() // Cancela o submit do form
        try{
            // Monta um objeto/json para ser enviado na URI
            const game = {
                name: name.current.value, 
                price: price.current.value,
                rentValue: rentValue.current.value,
                platform: platform.current.value,
                genre: genre.current.value,
                releaseDate: releaseDate.current.value,
                isRented: isRented.current.checked,
            }
            // Chama a função da API enviando o JSON
            const response = await axios.post("http://localhost:8000/api/games", game)
            setStatus("Game registered")
            console.log(response) // pressione F12 e veja no console a resposta da API
        } catch(error){
            setStatus("Fail to register game")
        }
    }
}