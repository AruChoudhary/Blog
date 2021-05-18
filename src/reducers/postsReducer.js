

//Reducer should always have a return statement. Must return any value besides undefined.
//Can only return some combination of argument passed in this function!(state or action here)
// return document.querySelector('input'); //BAD!!!
// return axios.get('/posts'); //BAD!!
//convention-do not mutate the state object(i.e., we cannot write anything like state.push(___) or state.pop() or state.___=___)
// Actually we can mutate state argument except in one case.

export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};