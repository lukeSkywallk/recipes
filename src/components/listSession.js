import React from 'react';
import Session from './session.js';

export default class ListSession extends React.Component{    
    
    render(){
        return(
            <React.Fragment>
                {/*console.log(this.props.listSession)*/}
                {this.props.listSession.map((session, key) =>
                        <Session key={key} session={session}></Session>
                        /*console.log(session)*/
                    )}
            </React.Fragment>
        )
    }
}