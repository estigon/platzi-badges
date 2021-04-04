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
                    <img className="Badge__avatar" src={ this.props.badgeValues.avatarUrl || 'https://es.gravatar.com/avatar?d=identicon'} alt="avatar" />
                    <h1>{this.props.badgeValues.firstName || "First name"} <br /> {this.props.badgeValues.lastName || "Last name"}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.badgeValues.jobTitle || "Job title"}</h3>
                    <div>@{this.props.badgeValues.twitter || "Twitter"}</div>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge