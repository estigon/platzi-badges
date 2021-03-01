import React, { Component } from 'react'
import './styles/Home.css'

import platziConfLogo from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <>
                <div className="Home">
                    <div className="Home__col">
                        <img src={platziConfLogo} />
                        <div className="align-self-center mt-4">
                            <Link to="/badges" className="btn btn-primary">start now</Link>
                        </div>
                    </div>
                    <div>
                        <img src={astronauts} className="Home__astronauts"/>
                    </div>
                </div>
            </>
        )
    }
}

export default Home
