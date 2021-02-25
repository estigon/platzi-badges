import React from 'react'
import confLogo from '../images/badge-header.svg'

//los styles no los almaceno en una variable, al importarlos webpack se encarga de agregarlos al codigo
import './styles/Badge.css'

class Badge extends React.Component {
    render(){
        return(
            
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="logo de la conferencia" />
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://es.gravatar.com/avatar?d=identicon" alt="avatar" />
                    <h1>{this.props.badgeValues.firstName} <br /> {this.props.badgeValues.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.badgeValues.jobTitle}</h3>
                    <div>@{this.props.badgeValues.twitter}</div>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge