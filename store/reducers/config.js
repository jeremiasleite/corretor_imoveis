const reducer = (state = {urlBase: 'http://localhost:3001'}, action) =>{
    switch(action.type){
        case 'SET_URLBASE':
            return {...state, urlBase: action.payload}
        default:
            return state
    }
    
}

export default reducer;