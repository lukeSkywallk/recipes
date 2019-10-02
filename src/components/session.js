import React from 'react'
import ListSessionContent from './listSessionContent.js'
import { ListItem,List, ListItemText } from '@material-ui/core'

function Session({session}){

    return(
        <React.Fragment>
            <List>
                <ListItem button>
                    <ListItemText primary={session.nome}/>                    
                </ListItem>                
                <ListSessionContent listSessionContent={session.conteudo}></ListSessionContent>                
            </List>
            
            
        </React.Fragment> 
    )
}

export default Session;