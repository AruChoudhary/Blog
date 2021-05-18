import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';


export default combineReducers({
    //we are adding some dummy key with a fixed value here rn as we don't know our reducers yet, tricking redux into dummy reducers
    //dummy : ()=>'Hi there'
    posts: postsReducer,
    users: usersReducer
});