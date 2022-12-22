import { ValidationText } from "./ValidationText"
import { cleanup, render, screen } from '@testing-library/react'

describe('<ValidationText />', () => {
    afterEach(() => {
        cleanup();
    })

    it('renders component properly', () => {
        render(<ValidationText />)

        const validationMsg = screen.getByTestId('error-message')

        expect(validationMsg).toBeInTheDocument();
    })

    it('should have the correct class name', () => {
        render(<ValidationText />)

        const validationMsg = screen.getByTestId('error-message')

        expect(validationMsg).toHaveClass('validation-text')
    })

})
