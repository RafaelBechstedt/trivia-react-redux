import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";

describe('', () => {
    it('', async() => {
        const { history } = renderWithRouterAndRedux(<App />);
        const inputEmail = screen.getByTestId("input-gravatar-email")
        const inputName = screen.getByTestId("input-player-name")
        const btnPlay = screen.getByTestId("btn-play")
        const btnSettings = screen.getByTestId("btn-settings")

        expect(btnPlay).toBeDisabled()
        userEvent.type(inputEmail,'teste@teste.com')
        userEvent.type(inputName,'teste')
        expect(btnPlay).not.toBeDisabled()
        userEvent.click(btnPlay)
        const { pathname } = history.location;
        await expect(pathname).toBe('/game')

    })

})