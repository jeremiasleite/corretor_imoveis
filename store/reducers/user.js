const INITIAL_STATE = {
    username: '',
    token: ''    
}

const reducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'SET_TOKEN':
            return {...state, username: action.payload.username, token: action.payload.token}
        default:
            return state
    }
    
}

export default reducer;