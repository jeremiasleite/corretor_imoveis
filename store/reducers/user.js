const INITIAL_STATE = {
    nome: 'jeremias',    
}

const reducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'SET_URLBASE':
            return {...state, nome: action.payload}
        default:
            return state
    }
    
}

export default reducer;