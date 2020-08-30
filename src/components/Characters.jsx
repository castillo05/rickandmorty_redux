import React,{useEffect} from 'react'
import {getCharacters} from '../actions/rick_morty'
import {useDispatch,useSelector} from 'react-redux';

import {Typography} from '@material-ui/core'

export default function Characters() {

    const dispatch=useDispatch()

    const characters=useSelector(store=>store.characters.data)

    useEffect(() => {
        dispatch(getCharacters())
       
    }, [])

   
    return (
        <div>
            <Typography variant="h1" align="center">The Rick and Morty API</Typography>
            
            {characters.map((c)=>(
                <ul key={c.id}>
                    <li>{c.name}</li>
                </ul>
            ))}
        </div>
    )
}
