import React, { useState } from 'react';
import ListSession from './listSession.js';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
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
        <React.Fragment>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={recipe.nome}></ListItemText>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ListSession listSession={recipe.secao}></ListSession>                        
            </Collapse>
            
        </React.Fragment>
    )
}

export default RecipeDetails;

/*
<ExpansionPanel>
                <ExpansionPanelSummary>
                    <Typography>{recipe.nome}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    <ListSession listSession={recipe.secao}></ListSession>        
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>*/