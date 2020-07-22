const urlBasePro = 'https://nestocorretor.herokuapp.com'
//const urlBaseDev = 'http://localhost:3001'
const reducer = (state = {urlBase: urlBasePro}, action) =>{
    switch(action.type){
        case 'SET_URLBASE':
            return {...state, urlBase: action.payload}
        default:
            return state
    }
    
}

export default reducer;