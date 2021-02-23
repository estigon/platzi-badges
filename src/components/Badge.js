import React from 'react'
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <img src={confLogo} alt="logo de la conferencia" />
                </div>

                <div>
                    <img src="https://es.gravatar.com/avatar?d=identicon" alt="avatar" />
                    <h1>Elys <br /> Gonzalez</h1>
                </div>

                <div>
                    <p>Frontend developer</p>
                    <p>@Estigon</p>
                </div>

                <div>
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge