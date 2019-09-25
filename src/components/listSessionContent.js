import React from 'react';
import SessionContent from './sessionContent';

export default class ListSessionContent extends React.Component{
    render(){
        return(
            <React.Fragment>
                {
                    this.props.listSessionContent.map((content, key) =>
                        <SessionContent key={key} sessionContent={content}></SessionContent>
                    )
                }
            </React.Fragment>
        )
    }
}