import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'

export class Badges extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: undefined
        }
    }

    componentDidMount(){
        //aqui hacer las peticiones
        this.fetchData()
    }

    //fetch data tiene que ser async para poder usar el keyword await
    fetchData = async () => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.list()
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error }) 
        }
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate')
        console.log({
            prevProps: prevProps,
            prevState: prevState
        })
        console.log({
            props: this.props,
            state: this.state
        })
    }

    componentWillUnmount(){
        //limpiamos peticiones pendientes
    }

    render() {
        if(this.state.loading){
            return <PageLoading />
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
          }

        return (
            <>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="conf logo" />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data}/>                        
                    </div>
                </div>
            </>
        )
    }
}
/**
 * usamos <li key={badge.id}> el key es importante porque genera un identificador unico para react
 */
export default Badges
