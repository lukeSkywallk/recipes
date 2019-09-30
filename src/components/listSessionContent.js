import React from 'react';
import SessionContent from './sessionContent';

function ListSessionContent({listSessionContent}){
    return(
        listSessionContent.map((sessionContent, key) => (
            <SessionContent key={key} sessionContent={sessionContent}></SessionContent>
        ))
    )
}

export default ListSessionContent;