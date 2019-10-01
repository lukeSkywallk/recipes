import React, { useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputBase from '@material-ui/core/InputBase';

function Paginator({numberTotalRecipes, startingPaginationShowing, actualPaginationShowing, actionGoPage}){

    const [backButtonPagination, setBackButtonPagination] = useState(null);
    const [forwardButtonPagination, setForwardButtonPagination] = useState(null);
    const [firstPageButtonPagination, setFirstPageButtonPagination] = useState(null);
    const [lastPageButtonPagination, setLastPageButtonPagination] = useState(null);
    const [pageNumberToGo, setPageNumberToGo] = useState(0);

    useEffect(() =>{
        actionGoPage(pageNumberToGo);
        setBackButtonPagination(actualPaginationShowing + 1 > 1 ? <Button onClick={() => setPageNumberToGo(actualPaginationShowing - 1)}>{"<"}</Button> : undefined);        
        setForwardButtonPagination(actualPaginationShowing + 1 < Math.ceil((numberTotalRecipes) / 5) ? <Button onClick={() => setPageNumberToGo(actualPaginationShowing + 1)}>{">"}</Button> : undefined);
        setFirstPageButtonPagination(actualPaginationShowing + 1 !== 1 ? <Button onClick={() => setPageNumberToGo(1)}>{"<<"}</Button> : undefined);
        setLastPageButtonPagination(actualPaginationShowing + 1 < Math.ceil((numberTotalRecipes) / 5) ? <Button onClick={() => setPageNumberToGo(Math.ceil(numberTotalRecipes / 5))}>{">>"}</Button> : undefined);            
    },[actionGoPage, pageNumberToGo, actualPaginationShowing, setPageNumberToGo, numberTotalRecipes]);

    const parseValueElementToInt = (value) =>{
        var convertedValue = undefined;
        try{
            console.log(value);
            convertedValue = parseInt(value);
        }catch(e){
            convertedValue = parseInt(0);
        }
        return convertedValue;
    }

    const handleValueChange = (value) =>{
        const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

        if (value === '' || re.test(value)) {
            return value;
        }
        return 1;
    }

    return(           
        <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={6}>
                <Grid container direction="column" alignItems="center">                
                    <ButtonGroup size="small" aria-label="small outlined button group">                        
                        <InputBase
                            placeholder="Pesquisa"
                            onChange={(e) => setPageNumberToGo(handleValueChange(e.target.value) - 1)}/>
                        {firstPageButtonPagination}
                        {backButtonPagination}
                        {
                            <Button>
                                {actualPaginationShowing + 1}
                            </Button>
                        }
                        {/*
                            Array.from(Array(Math.ceil((numberTotalRecipes > 25 ? 25 : numberTotalRecipes) / 5)).keys()).map((pageNumber, key) =>
                                <Button 
                                    key={key}
                                    onClick={() => setPageNumberToGo(startingPaginationShowing + pageNumber)}>
                                        {startingPaginationShowing + pageNumber} {numberTotalRecipes} {Math.ceil((numberTotalRecipes > 25 ? 25 : numberTotalRecipes) / 5)}
                                </Button>
                            )*/
                        }
                        {forwardButtonPagination}
                        {lastPageButtonPagination}
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Paginator;