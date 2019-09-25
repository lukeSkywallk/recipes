import React from 'react'
import ListSessionContent from './listSessionContent.js'

export default class Session extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <h2>{this.props.session.nome}</h2>
                    {/*console.log(this.props.session.conteudo)*/}
                    <ListSessionContent listSessionContent={this.props.session.conteudo}></ListSessionContent>
                    
                    

            </React.Fragment>
        )
    }
}