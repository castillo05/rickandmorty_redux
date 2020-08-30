import React,{useEffect} from 'react'
import {getCharacters} from '../actions/rick_morty'
import {useDispatch,useSelector} from 'react-redux';

import {Container} from '@material-ui/core'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from '../styles'

export default function Characters() {
    const classes=styles();

    const dispatch=useDispatch()

    const characters=useSelector(store=>store.characters.data)

    useEffect(() => {
        dispatch(getCharacters())
       
    }, [])

   
    return (
        
         <Container className={classes.container}>
             
           
                {characters.map((c)=>(
                    <CardContent className={classes.root}>
                        <CardMedia
                        className={classes.media}
                        image={c.image}
                        title="Contemplative Reptile"
                        />

                        <div className={classes.container_left}>
                            <Typography className={classes.name} variant="h4">{c.name}</Typography>
                            <Typography className={classes.status} variant="h6">{c.status} - {c.species}</Typography>
                            <Typography className={classes.status}>Last known location:</Typography>
                            <Typography className={classes.status}>{c.origin.name}</Typography>
                            
                        </div>
                    </CardContent>

                   
                     
                    
                ))}
               
               </Container>
           
        
    )
}
