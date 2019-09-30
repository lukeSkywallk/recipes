import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Paginator({numberTotalRecipes, startingPaginationShowing, actualPaginatorShowing, actionGoPage}){

    const goToPage = (pageNumberToGo) =>{
        actionGoPage(pageNumberToGo);
        //console.log(pageNumberToGo);

    }

    return(
        <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={6}>
                <Grid container direction="column" alignItems="center">
                    <ButtonGroup size="small" aria-label="small outlined button group">                        
                        {
                            Array.from(Array(Math.ceil((numberTotalRecipes > 25 ? numberTotalRecipes : 25) / 5)).keys()).map((pageNumber, key) =>
                                <Button 
                                    key={key}
                                    onClick={() => goToPage(startingPaginationShowing + pageNumber)}>
                                        {startingPaginationShowing + pageNumber}
                                </Button>
                            )
                        }
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Paginator;
/*
export default class Paginator extends React.Component{
    constructor(props){
        super(props);
        this.numberTotalRecipes = this.props.returnListRecipes.total;
        this.numberPagesShowing = this.numberTotalRecipes > 25 ? 25 : this.numberTotalRecipes;
        this.start = this.props.start;
    }

    goToPage(clicado){
        this.props.actionGoPage(clicado);
    }

    back(clicked){
        this.props.actionBackPage(clicked);
    }

    forward(clicked){
        this.props.actionForwardPage(clicked);
    }

    render(){
        var backButtonPagination = undefined;
        var forwardButtonPagination = undefined;
        var firstPageButtonPagination = undefined;
        var lastPageButtonPagination = undefined;
        if(this.props.actualPaginatorShowing > 1){
            backButtonPagination = <Button onClick={() => this.back(this.props.actualPaginatorShowing)}>&lt;</Button>
        }
        if(this.props.actualPaginatorShowing < Math.ceil(this.numberTotalRecipes / 5)){
            forwardButtonPagination = <Button onClick={() => this.forward(this.props.actualPaginatorShowing)}>&gt;</Button>
        }

        if(this.props.firstPageButtonPagination !== 1){
            firstPageButtonPagination = <Button onClick={() => this.goToPage(1)}>&lt;&lt;</Button>
        }

        if(this.props.lastPageButtonPagination !== Math.ceil(this.numberTotalRecipes / 5)){
            lastPageButtonPagination = <Button onClick={() => this.goToPage(Math.ceil(this.numberTotalRecipes / 5))}>&gt;&gt;</Button>
        }
        return(
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={6}>
                    <Grid container direction="column" alignItems="center">
                        <ButtonGroup size="small" aria-label="small outlined button group">
                            {firstPageButtonPagination}
                            {backButtonPagination}
                            {                                
                                Array.from(Array(Math.ceil(this.numberPagesShowing / 5)).keys()).map((num, key) =>                                        
                                        <Button 
                                            key={key} 
                                            onClick={() => this.goToPage(this.props.start+num)}>
                                                {this.props.start + num}
                                        </Button>
                                )
                            }
                            {forwardButtonPagination}
                            {lastPageButtonPagination}
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}*/