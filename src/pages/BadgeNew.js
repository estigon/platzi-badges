import React from 'react'
import Badge from '../components/Badge'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                jobTitle: '',
                twitter: '',
                email: ''
            }
        }        
    }

    handleChange = e => {
        this.setState({
            form: {
                ... this.state.form,//copio todos los valores de mi form
                [e.target.name]: e.target.value//añado un nuevo valor al objeto form o sobreescribo un valor
            }    
        })
    }

    render() {
        return (
            <>
                {/* <Navbar /> */}
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                badgeValues={this.state.form}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </>          
        )
    }
}

export default BadgeNew