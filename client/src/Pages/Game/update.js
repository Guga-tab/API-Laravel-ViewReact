import axios from "axios"
import { useRef, useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

export default function GameUpdate(){
    // Obtem o parâmetro da rota
    const {id} = useParams()
    // Estado da operação
    const [status, setStatus] = useState("")

    // Armazena dados digitados pelo usuário
    const name = useRef("")
    const price = useRef("")
    const rentValue = useRef("")
    const platform = useRef("")
    const genre = useRef("")
    const releaseDate = useRef("")
    const isRented = useRef("")

    // Obtem o objeto sendo editado
    useEffect(() =>{           
            async function consult() {
                const response = await axios.get(`http://localhost:8000/api/games/${id}`)
                name.current.value = response.data.name
                price.current.value = response.data.price
                rentValue.current.value = response.data.rentValue
                platform.current.value = response.data.platform
                genre.current.value = response.data.genre
                releaseDate.current.value = response.data.releaseDate
                isRented.current.checked = response.data.isRented
            }

            consult();
    },[])

    // Chama a função da API
    async function record(e) {
        e.preventDefault() // cancela o submit

        // Monta um objeto/json para ser enviado na URI
        const json = {
                name: name.current.value, 
                price: price.current.value,
                rentValue: rentValue.current.value,
                platform: platform.current.value,
                genre: genre.current.value,
                releaseDate: releaseDate.current.value,
                isRented: isRented.current.checked,
        }

        try{
            const response = await axios.put(`http://localhost:8000/api/games/${id}`, json)
            setStatus("Game registered")
        } catch(error){
            setStatus(`Fail: ${error}`)
        }
    }

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

}