import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

const BebidasContext = createContext()

const BebidasProvider = ({children}) => {

    const [bebidas, setBebidas] = useState([])

    const consultarBebida = async datos => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`

            const {data} = await axios(url)
            //console.log(data.drinks)
            setBebidas(data.drinks)

        } catch (error) {
            onslotchange.log(error)
        }
    }

    return (
        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas
            }}
        >
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext