import React, { useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Paginator({numberTotalRecipes, startingPaginationShowing, actualPaginationShowing, actionGoPage}){

    const [backButtonPagination, setBackButtonPagination] = useState(null);
    const [forwardButtonPagination, setForwardButtonPagination] = useState(null);
    const [firstPageButtonPagination, setFirstPageButtonPagination] = useState(null);
    const [lastPageButtonPagination, setLastPageButtonPagination] = useState(null);
    const [pageNumberToGo, setPageNumberToGo] = useState(0);

    useEffect(() =>{
        actionGoPage(pageNumberToGo);
        setBackButtonPagination(actualPaginationShowing > 0 ? <Button onClick={() => setPageNumberToGo(actualPaginationShowing - 1)}>{"<"}</Button> : undefined);        
        setForwardButtonPagination(actualPaginationShowing < (Math.ceil((numberTotalRecipes) / 5) - 1) ? <Button onClick={() => setPageNumberToGo(actualPaginationShowing + 1)}>{">"}</Button> : undefined);
        setFirstPageButtonPagination(actualPaginationShowing > 0 ? <Button onClick={() => setPageNumberToGo(0)}>{"<<"}</Button> : undefined);
        setLastPageButtonPagination(actualPaginationShowing < ((Math.ceil(numberTotalRecipes) / 5) - 1) ? <Button onClick={() => setPageNumberToGo(Math.ceil(numberTotalRecipes / 5) - 1)}>{">>"}</Button> : undefined);            
    },[actionGoPage, pageNumberToGo, actualPaginationShowing, setPageNumberToGo, numberTotalRecipes]);

    return(           
        <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={6}>
                <Grid container direction="column" alignItems="center">                
                    <ButtonGroup size="small" aria-label="small outlined button group">                        
                        {firstPageButtonPagination}
                        {backButtonPagination}
                        {
                            <Button>
                                {actualPaginationShowing + 1}
                            </Button>
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