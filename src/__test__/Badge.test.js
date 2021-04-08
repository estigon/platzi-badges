import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Badge from '../components/Badge'
import BadgeMock from '../__mocks__/BadgeMock'

describe('<Badge /> test', () => {
    test('<Badge /> render', () => {
        const badge = BadgeMock
        render(<Badge  badgeValues={badge}/>)
        expect(screen.getByText("#platziconf")).toBeInTheDocument()
    })

    test('<Badge /> tiene un twitter', () => {
        const badge = BadgeMock
        render(<Badge badgeValues={badge} />)
        expect(screen.getByText("@thelastairbender")).toBeInTheDocument()
    })
    
})
