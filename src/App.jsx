import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import generateStore from './store/store'
import Characters from './components/Characters'

function App() {
  const store=generateStore()
  return (
    <div>
      <Provider store={store}>
        <Characters></Characters>
      </Provider>
    </div>
  );
}

export default App;
