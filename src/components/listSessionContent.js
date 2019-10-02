import React from 'react';
import SessionContent from './sessionContent';
import { List } from '@material-ui/core';

function ListSessionContent({listSessionContent}){
    return(
        <List>
            {
                listSessionContent.map((sessionContent, key) => (
                    <SessionContent key={key} sessionContent={sessionContent}></SessionContent>
                )) 
            }
        </List>
        
    )
}

export default ListSessionContent;