/**
 * Por defecto los botones adentro de form son de tipo submit.
 * puedo cambiar este conportamiento especificando el type="button" en el boton
 * o dentro del <form onSubmit={funcion}> manejar el evento del submit y agregar e.preventDefault() 
 * para evitar el envio del formulario que es el comportamiento por defecto
 */
import React, { Component } from 'react'

class BadgeForm extends Component {

    handleClick = e => {
        console.log("the button was clicked")
    }

    render() {
        return (
            <div>                
                <form onSubmit={this.props.onSubmit} >
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            type="text" 
                            className="form-control" 
                            name="firstName"
                            id="firstName" 
                            value={this.props.formValues.firstName} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            type="text" 
                            className="form-control" 
                            name="lastName"
                            id="lastName" 
                            value={this.props.formValues.lastName}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            onChange={this.props.onChange} 
                            type="email" 
                            className="form-control" 
                            name="email" 
                            id="email" 
                            value={this.props.formValues.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Job title</label>
                        <input 
                            onChange={this.props.onChange} 
                            type="text" 
                            className="form-control" 
                            name="jobTitle" 
                            id="jobTitle" 
                            value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="twitter">Twitter</label>
                        <input 
                            onChange={this.props.onChange} 
                            type="text" 
                            className="form-control" 
                            name="twitter" 
                            id="twitter" 
                            value={this.props.formValues.twitter}
                        />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                    {this.props.error && <p className="text-danger">{ this.props.error.message }</p>}
                </form>
            </div>
        )
    }
}

export default BadgeForm