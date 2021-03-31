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
                <h1>New Attendant</h1>

                <form onSubmit={this.props.onSubmit} >
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                        onChange={this.props.onChange} 
                        type="text" 
                        className="form-control" 
                        name="firstName" 
                        value={this.props.formValues.firstName} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                        onChange={this.props.onChange} 
                        type="text" 
                        className="form-control" 
                        name="lastName" 
                        value={this.props.formValues.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        onChange={this.props.onChange} 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        value={this.props.formValues.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job title</label>
                        <input 
                        onChange={this.props.onChange} 
                        type="text" 
                        className="form-control" 
                        name="jobTitle" 
                        value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                        onChange={this.props.onChange} 
                        type="text" 
                        className="form-control" 
                        name="twitter" 
                        value={this.props.formValues.twitter}
                        />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm