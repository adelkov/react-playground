import { combineReducers } from 'redux'
import posts from "./posts";
import comments from "./comments";
import markers from "./markers";
import {reducer as toastrReducer} from 'react-redux-toastr'
import leftovers from "./leftovers";
import users from "./users";



export default combineReducers({
    posts,
    comments,
    markers,
    leftovers,
    users
    // toastr: toastrReducer
})
