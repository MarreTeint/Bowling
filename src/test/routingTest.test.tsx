import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'

import App from '../App';


test('GameMenu => Game', () => { 
    render(
        <App />,
    )
    const button = screen.getByText('Partie rapide');

    // const button = getByTestId('button')
    userEvent.click(button)
    expect(screen.getByText('Tableau des Scores')).toBeInTheDocument()

})


test('Game => EndGame', () => { 
    
        render(
            <App />,
        )
    
        const button = screen.getAllByText('Fin de partie');    
        userEvent.click(button[0])
        expect(screen.getByText('Fin de partie')).toBeInTheDocument()
})