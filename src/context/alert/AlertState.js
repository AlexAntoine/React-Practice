import React, {useReducer} from 'react';
import alertContext from './AlertContext';
import AlertReducer from './AlertReducer';

import {
   SET_ALERT,
   REMOVE_ALERT
} from '../types';

const AlertState = props => {

    const initialSate = null;

    const [state, dispatch] = useReducer(AlertReducer, initialSate);

    //SET Alert
    const setAlert =(msg,type) =>{
        dispatch({
            type: SET_ALERT,
            payload: {msg, type}
        })

       setTimeout(()=> dispatch({type:REMOVE_ALERT}),5000);
    }

    return <alertContext.Provider value={{
        alert:state,
        setAlert
    }}>
        {props.children}
    </alertContext.Provider>
};

export default AlertState;