import React from 'react'
import Badge from '../components/Badge'
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import api from '../api'
import md5 from 'crypto-js/md5'

class BadgeEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            error: null,
            form: {
                firstName: '',
                lastName: '',
                jobTitle: '',
                twitter: '',
                email: ''
            }
        }        
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({error: null, loading: true})
        console.log(this.props)
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
                )
            this.setState({loading: false, form: data})
        } catch (error) {
            this.setState({loading: false, error:true})
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
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({ loading: false })
            
            //redirigir a badges al enviar correctamente el formulario
            this.props.history.push('/badges')
        }catch(error){
            this.setState({ loading: false, error: error})
        }        
    }

    render() {
        if(this.state.loading){
            return <PageLoading />
        }
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
                            <h1>Edit Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </>          
        )
    }
}

export default BadgeEdit