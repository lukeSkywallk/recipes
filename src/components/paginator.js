import React from 'react';
import Link from '@material-ui/core/Link';

export default class Paginator extends React.Component{
    render(){
        return(
            <div>
                
                {
                    
                    Array.from(Array(Math.ceil(this.props.returnListRecipes.total / 5)).keys())
                    .map((num, index) =>
                    <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                      alert({index});
                    }}
                  >
                    {num}
                  </Link>
                    )
                }</div>
        )
    }
}