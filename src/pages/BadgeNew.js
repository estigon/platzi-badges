import React from 'react'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'
class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName="Elys"
                                lastName="Gonzalez"
                                job="Junior developer"
                                twitter="estigon"
                            />
                        </div>
                    </div>
                </div>
            </div>          
        )
    }
}

export default BadgeNew