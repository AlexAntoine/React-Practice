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
 const searchUsers = async(text)=>{

    setLoading();

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    dispatch({
        type: SEARCH_USERS,
        payload:res.data.items
    })
  }
    
    //Get User

    //Get repos

    //Clear Users

    //Set Loading
    const setLoading = ()=>{

        dispatch({type: SET_LOADING})
    }

    return <GithubContext.Provider value={{
        users:state.users,
        user:state.users,
        repos:state.repos,
        loading:state.loading,
        searchUsers
    }}>
        {props.children}
    </GithubContext.Provider>
};

export default GithubState;