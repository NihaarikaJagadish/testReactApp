const initialState = {
    message: "This is a dummy message"
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if(action.type === 'message Change'){
        newState.message = "This is the new message"
    }

    return newState;
}

export default reducer;