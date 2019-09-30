import React from 'react';
import Session from './session.js';

function ListSession({listSession}){

    return(
        listSession.map((session, key) => (
            <Session key={key} session={session}></Session>
        ))
    )
}

export default ListSession;