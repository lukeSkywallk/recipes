import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default class Paginator extends React.Component{
    constructor(props){
        super(props);
        this.numberTotalRecipes = this.props.returnListRecipes.total;
        this.numberPagesShowing = this.numberTotalRecipes > 25 ? 25 : this.numberTotalRecipes;
        this.start = this.props.start;
    }

    calculo(clicado){
        this.props.action(clicado);
        if(clicado % 5 === 1){
            console.log(1);
        }else if(clicado % 5 === 0){
            console.log((clicado / 5)+1);
        }
    }

    render(){
        return(
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={6}>
                    <Grid container direction="column" alignItems="center">
                        <ButtonGroup size="small" aria-label="small outlined button group">
                            {                                
                                Array.from(Array(Math.ceil(this.numberPagesShowing / 5)).keys()).map((num, key) =>
                                        <Button key={key} onClick={() => this.calculo(this.props.start+num)}>{this.props.start + num}</Button>
                                )
                            }
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}