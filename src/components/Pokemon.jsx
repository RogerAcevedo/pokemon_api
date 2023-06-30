import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = () => {

    // STATE
    // MAKE pokeList STATE TO MAKE DATA ACCESIBLE. KEEP TRACK AND DISPLAY INFO TO USER
    const [pokeList, setPokeList] = useState([])

    // STATE
    // DECONSTRUCT OUR API errResponse
    const [errResponse, setErrResponse] = useState("")

    // useEffect HOOK
    // EXECUTRE LOGIC WHEN ITS FIRST RENDERED
    // TAKES TWO ARGUMENTS - CALLBACK FUNCTION (ARROW) & ARRAY AS AN EMPTY ARGUMENT
    useEffect(() => {

        // LOGIC THAT WE WANT TO RUN AS SOON AS THE COMPONENT IS RENDERED
        // CALL FUNCTION ( OUR MAKE API CALL FUNCTION)
        makeAPICall()
    }, [])


    
    const makeAPICall = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151'")
            .then(res => {
                
                // ALWAYS RETURN DATA
                // DESTRUCTURE RESULTS
                const {results} = res.data

                // DISPLAY DATA WE'RE GETTING BACK FROM API
                console.log(res.data)

                // setPokelist(results) DISPLAYS RESULTS FROM OUR STATE
                // SUCCESSFUL RESPONSE
                setPokeList(results)
            }) 

            // UNSUCCESSFUL RESPONSE
            // MESSAGE WHEN RESPONSE IS UNSUSCCESFUL
            .catch(error => setErrResponse("Oooops something went wrong")) 
    }


    return (
        <fieldset>
            <h2>ALL 151:</h2>

            {/* TERNARY TO SHOW ERROR MESSAGE */}
            {/* COMES FROM OUR DECONSTRUCTED errResponse */}
            {/* errResponse displays error message from .catch(error => setErrResponse("Oooops something went wrong"))  */}
            {errResponse ? <p>{errResponse}</p> : null}
            {
                // ITIRATE THROUGH THE POKELIST TO DISPLAY ALL POKEMON IN THE LIST
                // pokeList.map((poke) - LOOPS THROUGH A LIST
                // {poke.name} - DISPLAYS OUR POKEMON NAME
                pokeList.map((poke) => <p>{poke.name}</p>)
            }
        </fieldset>
    )
}

export default Pokemon




// AXIOS NOTES

    // ALLOWS US TO DEFINE THE HTTP WERE MAKING A REQUEST FOR

    // ATTACH .then(succesful) & .catch(unsuccesful)

    // AXIOS TURNS IT INTO A JSON OBJECT AND RETURNS IT AS KEY CALLED DATA


// useHook NOTES

    // useHook - needs to be imported. same as useState 
    
    // IMMEADIATELY EXECUTE LOGIC WHEN COMPONENT IS FIRST RENDERED
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    
