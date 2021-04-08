import React from 'react'
import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '@testing-library/react'
import Navbar from '../components/Navbar'
import {BrowserRouter} from 'react-router-dom'
import userEvent from '@testing-library/user-event'


describe('<Navbar /> test', () => {

    //no podemos probar un elemento hijo de router sin un router "<Link>"
    
    test('<Navbar /> renderizado', () => {
        const component = render(
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            )
           
        //console.log(component.debug())    
        expect(screen.getByText("Platzi")).toBeInTheDocument()
    })

    test('<Navbar /> tiene un enlace', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        )

        const link = screen.getByRole("link")
        expect(link).toHaveAttribute('href', '/')
    })
    

})

