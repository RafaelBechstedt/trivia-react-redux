import { waitFor } from '@testing-library/react';
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";

describe('', () => {
    it('', async() => {
        const { history } = renderWithRouterAndRedux(<App />);
        const inputEmail = screen.getByTestId("input-gravatar-email");
        const inputName = screen.getByTestId("input-player-name");
        const btnPlay = screen.getByTestId("btn-play");
        expect(btnPlay).toBeDisabled();
        userEvent.clear(inputEmail);
        userEvent.clear(inputName);
        userEvent.type(inputEmail,'teste@teste.com');
        userEvent.type(inputName,'teste');
        expect(btnPlay).not.toBeDisabled();
        userEvent.click(btnPlay);
        await waitFor(() => { expect(history.location.pathname).toBe('/game');})
    })
    
    it('', () => {
        const { history } = renderWithRouterAndRedux(<App />);
        const btnSettings = screen.getByTestId("btn-settings");
        userEvent.click(btnSettings);        
        expect(history.location.pathname).toBe('/settings');
    })

})