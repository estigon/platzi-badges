import React from 'react'
import Badge from '../components/Badge'
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import md5 from 'crypto-js/md5'

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

    handleSubmit = async e => {
        e.preventDefault()
        //creando avatar
        let hash = md5(this.state.form.email).toString()
        this.state.form.avatarUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon`
        
        this.setState({ loading: true, error: null })
        try{
            await api.badges.create(this.state.form)
            this.setState({ loading: false })
        }catch(error){
            this.setState({ loading: false, error: error})
        }        
    }

    render() {
        return (
            <>
                {/* <Navbar /> */}
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="logo" />
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
                                onSubmit={this.handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </>          
        )
    }
}

export default BadgeNew