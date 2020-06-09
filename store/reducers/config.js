const reducer = (state = {urlBase: 'https://nestocorretor.herokuapp.com'}, action) =>{
    switch(action.type){
        case 'SET_URLBASE':
            return {...state, urlBase: action.payload}
        default:
            return state
    }
    
}

export default reducer;