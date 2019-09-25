import React from 'react'

export default class SessionContent extends React.Component{
    render(){
        return(
            <React.Fragment>
                {/*console.log(this.props.sessionContent)*/}
                <div>
                    {this.props.sessionContent}
                </div>
            </React.Fragment>
        )
    }
}