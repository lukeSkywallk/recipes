import React from 'react'
import ListSessionContent from './listSessionContent.js'

function Session({session}){

    return(
        <React.Fragment>
            {session.nome}<br/>
            <ListSessionContent listSessionContent={session.conteudo}></ListSessionContent>
        </React.Fragment>
    )
}

export default Session;