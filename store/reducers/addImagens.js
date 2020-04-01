const STATE_INITIAL = {
    modalOpen: false
}

const reducer = (state = STATE_INITIAL, action) => {
    switch (action.type) {
        case 'OPEN_DIALOG':
            return { ...state, modalOpen: true }
        case 'CLOSE_DIALOG':
            return { ...state, modalOpen: false }
        default:
            return state
    }

}

export default reducer;