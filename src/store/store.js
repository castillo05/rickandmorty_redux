import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import rick_morty_reducer from '../reducers/rick_morty'

const rootReducer=combineReducers({
    characters:rick_morty_reducer
})

export default function generateStore(){
    const store=createStore( rootReducer,applyMiddleware(thunk))
    return store;
}