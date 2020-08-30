import {makeStyles} from '@material-ui/styles';

const centeredStyleObj={
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
}

export default makeStyles({
    root: {
        display:'grid',
        gridTemplateColumns:'25% 75%',
        gridTemplateRows: '150px 300px',
        backgroundColor:'#393838',
        height:'200px',
        borderRadius:'10px 10px 10px 10px',
        marginTop:'10%',
        marginBottom:"10%"
      },
      container:{
        display:'grid',
        gridTemplateColumns:'50% 50%',
        gridTemplateRows: '300px 300px',
        gridGap: '10px',
        backgroundColor:'#1C1D1A',
        marginBottom:'10%'
      },
      container_left:{
        marginLeft:'2rem'
      },
      item:{
        display:'grid'
      },
      media: {
       
       
      },
      name: {
        color:'#fff'
      },
      status: {
        color:'#fff'
      },
      header:{
        fontFamily:'Arial',
        font:'bold',
        padding:'100px'
      },    
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto'
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        
      }
});
