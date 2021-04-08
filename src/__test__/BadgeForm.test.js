import React from 'react'
import '@testing-library/jest-dom'
import {fireEvent, render, screen} from '@testing-library/react'
//import userEvent from '@testing-library/user-event'
import BadgeForm from '../components/BadgeForm'
//import BadgeMock from '../__mocks__/BadgeMock'

const state = {
    loading: false,
    error: null,
    form: {
        firstName: '',
        lastName: '',
        jobTitle: '',
        twitter: '',
        email: ''
    }
}

describe('<BadgeForm />', () => {
    test('<BadgeForm /> render ', () => {
        const onChangeMock = jest.fn()
        const onSubmitMock = jest.fn()

        render(<BadgeForm 
            onChange={onChangeMock}
            formValues={state.form}
            onSubmit={onSubmitMock}
            error={state.error}
        />)

        //const component = screen.getByLabelText("First Name")
        //console.log(screen.debug(component))
                
        expect(screen.getByLabelText("First Name")).toBeInTheDocument()
    })

    test('<BadgeForm /> se puede escribir en un input fireEvent', () => {
        const onChangeMock = jest.fn()
        const onSubmitMock = jest.fn()
        const copyValues = {...state}
        copyValues.form.firstName = 'landa'

        render(<BadgeForm 
            onChange={onChangeMock}
            formValues={copyValues.form}
            onSubmit={onSubmitMock}
            error={copyValues.error}
        />)

        //consigo el elemento por el valor que muestra en pantalla
        const input = screen.getByLabelText("First Name")
        
        
        //console.log(screen.debug(input))

        //llamo al metodo onChange cambiando el valor del input
        fireEvent.change(input, {target: {value: 'Maria'}})
        screen.debug(input)
        //screen.debug()
        //compruebo el nuevo valor del input
        //expect(input.value).toBe('Maria')

    })
    
    /*test('<BadgeForm /> se puede escribir en un input userEvent', () => {
        const onChangeMock = jest.fn()
        const onSubmitMock = jest.fn()
        const copyValues = {...state}
        copyValues.form.firstName = 'landa'

        render(<BadgeForm 
            onChange={onChangeMock}
            formValues={copyValues.form}
            onSubmit={onSubmitMock}
            error={copyValues.error}
        />)

        //consigo el elemento por el valor que muestra en pantalla
        const input = screen.getByDisplayValue('landa')

        // input.setSelectionRange(0,5)
        // userEvent.type(input, '{backspace}Maria')
        userEvent.clear(input)
        //compruebo el nuevo valor del input
        expect(input).toHaveValue('Maria')

    })*/
})