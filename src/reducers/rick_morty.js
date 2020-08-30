
import {RICKMORTY_GET} from '../types/index';

const initialState={
    data:[]
}
    
export default (state=initialState,action)=>{
    switch (action.type) {
        case RICKMORTY_GET:
            return {...state,data:action.payload}
            
        default:
            return {...state};
    }
}