import React from 'react'

export default class SessionContent extends React.Component{
    render(){
        return(
            <React.Fragment>
                {/*console.log(this.props.sessionContent)*/}                
                {this.props.sessionContent}            
                <br/>
            </React.Fragment>
        )
    }
}