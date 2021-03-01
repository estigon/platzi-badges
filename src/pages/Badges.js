import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'

export class Badges extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
        console.log("constructor")
    }

    componentDidMount(){
        console.log("componentDidMount")
        this.idTimeout = setTimeout( () => {
            this.setState({
                data: [
                    {
                      id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                      irstName: "Freda",
                      lastName: "Grady",
                      email: "Leann_Berge@gmail.com",
                      jobTitle: "Legacy Brand Director",
                      twitter: "FredaGrady22221-7573",
                      avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                    },
                    {
                      id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                      firstName: "Major",
                      lastName: "Rodriguez",
                      email: "Ilene66@hotmail.com",
                      jobTitle: "Human Research Architect",
                      twitter: "ajorRodriguez61545",
                      avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                    },
                    {
                      id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                      firstName: "Daphney",
                      lastName: "Torphy",
                      email: "Ron61@hotmail.com",
                      jobTitle: "National Markets Officer",
                      twitter: "DaphneyTorphy96105",
                      avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                    }
                  ]
            })
        }, 3000)
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
        console.log('componentWillUnmount')
        //limpiamos peticiones pendientes
        clearTimeout(this.idTimeout)
    }

    render() {
        console.log("render")
        return (
            <>
                {/* <Navbar /> */}

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="conf logo" />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        {/* <a href="/badges/new" className="btn btn-primary">New Badge</a> */}
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
