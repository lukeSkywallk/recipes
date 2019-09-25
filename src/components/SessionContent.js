import React from 'react'

export default class SessionContent extends React.Component{
    render(){
        return(
            <React.Fragment>
                {this.props.content}
            </React.Fragment>
        )
    }
}