import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';


// export const fetchPosts = async () => {
//     // BAD APPROACH!!!!! we are breaking the rule of redux here. 
//     // We will get this error - Error: Actions must be plain objects. Use custom middleware for async actions.
//     // As our action creator is not returning a plain javascript object because we have that async await syntax. 
//     // And by the time our action gets to a reducer, we won't have fetched our data.(As return happens way before we get our response)
//     // Asynchronous action creators! (eg.- network requests) - we use middlewares
//     // while returning function, we will wait to return to dispatch any action, until we eventually get a response from api.
//     // Once we get the response, we will use dispatch function to manually dispatch the action i.e., with redux-thunk, we can manually dispatch an action at somepoint in future.
//     // With redux thunk we can make normal action creator which returns object as well as action creator which returns function. 

//     return function(dispatch, getState) {
//         const response = await jsonPlaceholder.get('/posts');
//         return {
//             type : 'FETCH_POSTS',
//             payload : response
//         };
//     };
// };

// We created this to fetch unique users and we still have fetchPosts and fetchUser if er want to refetch!
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
        await dispatch(fetchPosts());
        //to find unique user ids from all the ids.
        const userIds = _.uniq(_.map(getState().posts, 'userId'));
        userIds.forEach(id => dispatch(fetchUser(id)))
};

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({ type : 'FETCH_POSTS', payload : response.data});
};

export const fetchUser = (id) => async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${id}`);
        dispatch({ type : 'FETCH_USER', payload : response.data});
};


//OR
// export const fetchUser = (id) => dispatch => {
//         _fetchUser(id, dispatch);
// };

// //Underscore infront of name implies this is a private function and other engineers should not call this unless they know what they are doing.
// //Correct syntax to memoize it!
// const _fetchUser = _.memoize(async(id, dispatch) => {
//         const response = await jsonPlaceholder.get(`/users/${id}`);
//         dispatch({ type : 'FETCH_USER', payload : response.data});
// });

//Since we can only fetch it once using above, if we want to refetch it :
