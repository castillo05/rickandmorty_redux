import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import generateStore from './store/store'
import Characters from './components/Characters'
import {Typography} from '@material-ui/core'
import styles from './styles'

function App() {
  const classes=styles();
  const store=generateStore()
  return (
    <div>
      <Provider store={store}>
        <Typography className={classes.header} variant="h1" align="center">The Rick and Morty API</Typography>
        <Characters></Characters>
      </Provider>
    </div>
  );
}

export default App;
