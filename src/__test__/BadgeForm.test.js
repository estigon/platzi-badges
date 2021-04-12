import React from 'react'
import '@testing-library/jest-dom'
import {fireEvent, render, screen} from '@testing-library/react'
import BadgeForm from '../components/BadgeForm'

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
        //screen.debug(component)
                
        expect(screen.getByLabelText("First Name")).toBeInTheDocument()
    })

    test('<BadgeForm /> se puede escribir en un input fireEvent', () => {
        
        // const onChangeMock = jest.fn(e => e.target.value)
        const onChangeMock = jest.fn()
        const onSubmitMock = jest.fn()
        const copyValues = {...state}
        copyValues.form.firstName = 'landa'

        // const onChangeMock = jest.fn(
        //     e => copyValues.form.firstName = e.target.value
        // )

        render(<BadgeForm 
            onChange={onChangeMock}
            formValues={copyValues.form}
            onSubmit={onSubmitMock}
            error={copyValues.error}
        />)

        //consigo el elemento por el valor que muestra en pantalla
        const input = screen.getByLabelText("First Name")        

        //llamo al metodo onChange cambiando el valor del input
        /**
          **Se puede probar expect(onChangeMock.mock.results[0].value).toBe('valor esperado') tenga el valor 
            que le estamos devolviendo, que seria lo que le estariamos pasando al metodo real
          **Podriamos probar que el metodo ha sido llamado expect(onChangeMock).toHaveBeenCalled()
        */
        fireEvent.change(input, {target: {value: 'Maria'}})                        
        //compruebo el nuevo valor del input
        //expect(onChangeMock).toHaveBeenCalled()
        // expect(onChangeMock.mock.results[0].value).toBe('Maria')
        expect(input.value).toBe('Maria')
        //console.log(input)
        //console.log(input.value)//it shows "Maria"
        screen.debug(input)
        console.log(input.target)
    })

    test('<BadgeForm /> muestra un mensaje de error ', () => {
        const onChangeMock = jest.fn()
        const onSubmitMock = jest.fn()
        const copyValues = {...state}
        copyValues.error = new Error("error test")

        render(<BadgeForm 
            onChange={onChangeMock}
            formValues={copyValues.form}
            onSubmit={onSubmitMock}
            error={copyValues.error}
        />)

        expect(screen.getByText(/error test/i)).toBeInTheDocument()
    })
    

})