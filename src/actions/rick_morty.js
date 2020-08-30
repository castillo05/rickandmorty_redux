import axios from 'axios';
import {RICKMORTY_GET} from '../types/index';

// export const rickMortyGet=(payload)=>({
//     type:"RICKMORTY_GET",
//     payload
// })



export const getCharacters=()=>async(dispatch,getState)=>{
    try {
        const res = await axios.get('https://rickandmortyapi.com/api/character/');
       
        dispatch({
            type:RICKMORTY_GET,
            payload:res.data.results
            
        })
    } catch (error) {
        console.log(error)
    }
}