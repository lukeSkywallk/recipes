import React, {useState} from 'react'
import ListSessionContent from './listSessionContent.js'
import { ListItem,List, ListItemText, Collapse } from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

function Session({session}){

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return(
        <React.Fragment>
            <List style={{marginLeft: '5%'}}>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary={session.nome}/>                    
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>                
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <ListSessionContent listSessionContent={session.conteudo}></ListSessionContent>                
                </Collapse>
                
            </List>
            
            
        </React.Fragment> 
    )
}

export default Session;