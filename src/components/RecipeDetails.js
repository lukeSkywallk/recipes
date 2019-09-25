import React from 'react';
import ListSession from './listSession.js';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

export default class RecipeDetails extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ExpansionPanel>
                    <ExpansionPanelSummary>
                        <Typography>{this.props.recipe.nome}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                        <ListSession listSession={this.props.recipe.secao}></ListSession>        
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>                
                {/*console.log(this.props.recipe.secao)*/}                
            </React.Fragment>
        )
    }
}