import React, { useState } from 'react';
import ListSession from './listSession.js';
import { ListItemText, Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';

function RecipeDetails({recipe}){    
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return(
        <div>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={recipe.nome}></ListItemText>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ListSession listSession={recipe.secao}></ListSession>                        
            </Collapse>
            
        </div>
    )
}

export default RecipeDetails;