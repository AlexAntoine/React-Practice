import React, {useReducer, userReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_REPOS,
    GET_USER
} from '../types';

const GithubState = props => {

    const initialSate = {
        user:[],
        user:{},
        repos:[],
        loading:false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialSate);

    //Search Users
    
    //Get User

    //Get repos

    //Clear Users

    //Set Loading

    return <GithubContext.Provider value={{
        users:state.users,
        user:state.users,
        repos:state.repos,
        loading:state.loading
    }}>
        {props.children}
    </GithubContext.Provider>
};

export default GithubState;