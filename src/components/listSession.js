import React from 'react';
import Session from './session.js';
import { List } from '@material-ui/core';

function ListSession({listSession}){

    return(
        <List>
            {
                listSession.map((session, key) => (            
                    <Session key={key} session={session}></Session>
                ))
            }
        </List>
        
    )
}

export default ListSession;