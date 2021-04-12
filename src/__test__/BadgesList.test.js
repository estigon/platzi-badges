import React from 'react'
import '@testing-library/jest-dom'
import {fireEvent, render, screen} from '@testing-library/react'
import BadgesList from '../components/BadgesList'
import BadgesListMock from '../__mocks__/BadgesListMock'
import {BrowserRouter} from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('<BadgeList/> test', () => {
    test('<BadgeList/> render', () => {
        render(
            <BrowserRouter>
                <BadgesList badges={BadgesListMock} />
            </BrowserRouter>
        )
    
        expect(screen.getByText('@theCatQueen')).toBeInTheDocument()
    })

    test('<BadgeList/> que sea un enlace', () => {
        render(
            <BrowserRouter>
                <BadgesList badges={BadgesListMock} />
            </BrowserRouter>
        )

        const link = screen.getAllByRole("link")[2]
        expect(link).toHaveAttribute('href', '/badges/PPHVIyC')

    })
    
})