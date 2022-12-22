import { Button } from "./Button"
import { cleanup, render, screen } from '@testing-library/react'
import { buttonType } from "@Strings/enums";

describe('when the form renders', () => {
    let buttonElem: HTMLButtonElement
    beforeEach(() => {
        render(<Button text={buttonType.login} />)
        buttonElem = screen.getByRole('button', { name: 'Login' });
    })
    afterEach(() => {
        cleanup();}
    )

    it('renders component properly', () => {
        expect(buttonElem).toBeInTheDocument();
    })

    it('renders button with className', () => {
        expect(buttonElem).toHaveClass('form-button')
    })
})
