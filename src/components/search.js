import React from 'react';
import InputBase from '@material-ui/core/InputBase';

function Search({doSearch}){

    return(
        <InputBase
            placeholder="Pesquisa"
            onChange={(e) => doSearch(e.target.value)}/>
    )
}

export default Search;