import {LOGIN} from './actions'


const initialState={
    user:{}
}



export const mobileReducer=(state=initialState, action)=>{
    switch(action.type){
        case LOGIN:
        return {...state, user:res.data}
        
        
        default:
            return state
    }
}
