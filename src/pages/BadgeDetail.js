import React from 'react'
import Badge from '../components/Badge'
import api from '../api'
import PageLoading from '../components/PageLoading'
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import './styles/BadgeDetail.css'
import { Link } from 'react-router-dom'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

class BadgeDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            error: null,
            isOpen:false,
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

    fetchData = async e =>{
        this.setState({loading: true})
        try {
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading: false, form: data})
        } catch (error) {
            this.setState({loading:false, error: error})
        }
    }

    openModal = e => {
        this.setState({isOpen: true})
    }

    closeModal = e => {
        this.setState({isOpen: false})
    }

    deleteBadge = async () => {
        this.setState({loading: true})
        try {
            await api.badges.remove(this.props.match.params.badgeId)
            this.setState({loading: false})
            this.props.history.push("/badges")
        } catch (error) {
            this.setState({loading:false, error: error})
        }
    }

    render(){
        if(this.state.loading){
            return (
                <PageLoading />
            )
        }

        if(this.state.error){
            return (
                <h1 className="text-danger">{this.state.error.message}</h1>
            )
        }

        return (
            <>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <Badge badgeValues={this.state.form} />
                        </div>
                        <div className="col-md-6 align-self-center d-flex justify-content-center">
                            <div className="d-flex flex-column wrapp">
                                <h2>Actions:</h2>
                                <Link className="mb-1 text-decoration-none text-reset " to={`/badges/${this.props.match.params.badgeId}/edit`}>
                                    <div className="custom__button d-flex justify-content-center btn-success">
                                        <span className="align-self-center">Edit</span>
                                    </div>
                                </Link>
                                <button className="custom__button d-flex justify-content-center btn-danger">
                                    <span onClick={this.openModal} className="align-self-center">Delete</span>
                                </button>
                                <DeleteBadgeModal 
                                    isOpen={this.state.isOpen} 
                                    onClose={this.closeModal} 
                                    deleteBadge={this.deleteBadge}>
                                        Lorem ipsum
                                </DeleteBadgeModal>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default BadgeDetail