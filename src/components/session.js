import React, {useState} from 'react'
import ListSessionContent from './listSessionContent.js'
import { ListItem,List, ListItemText, Collapse } from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    defaultStyle: {
        marginLeft: '5%',
    }
});

function Session({session}){
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return(
        <React.Fragment>
            <List /*style={{marginLeft: '5%'}}*/ className={classes.defaultStyle}>
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