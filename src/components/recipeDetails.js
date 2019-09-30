import React from 'react';
import ListSession from './listSession.js';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

function RecipeDetails({recipe}){
    return(
        <React.Fragment>
            <ExpansionPanel>
                <ExpansionPanelSummary>
                    <Typography>{recipe.nome}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    <ListSession listSession={recipe.secao}></ListSession>        
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </React.Fragment>
    )
}

export default RecipeDetails;