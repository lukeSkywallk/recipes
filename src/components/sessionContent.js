import React from 'react'
import { ListItem } from '@material-ui/core'

function SessionContent({sessionContent}){

    return(
        <React.Fragment>
            <ListItem button>
                {sessionContent}
            </ListItem>
        </React.Fragment>
    )
}

export default SessionContent;