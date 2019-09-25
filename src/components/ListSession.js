import React from 'react';
import Session from './Session.js';

export default class ListSession extends React.Component{    
    
    render(){
        return(
            <React.Fragment>
                {this.props.listSession.map((session, key) =>
                        <Session key={key} session={session}></Session>
                    )}
            </React.Fragment>
        )
    }
}