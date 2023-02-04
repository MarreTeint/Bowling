import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import App from '../App';
test('GameMenu => GameSetting', () => {
    render(
        <App />,
    )
    const button = screen.getByText('Partie personnalisée');

    // const button = getByTestId('button')
    userEvent.click(button)
    expect(screen.getByText('Paramètres de la partie')).toBeInTheDocument()

})

test('GameMenu => Game', () => { 



})

test('GameSetting => Game', () => { 

    render(
        <App />,
    )

    const button = screen.getByText('Début de la partie');    
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