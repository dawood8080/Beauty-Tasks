import { Label } from "./Label"
import { cleanup, render, screen } from '@testing-library/react'


describe('when MainUserInputContainer renders', () => {
    afterEach(() => {
        cleanup();
    })

    it('renders component properly', () => {
        render(<Label iconClasses="fa-solid fa-envelope"/>)
        const labelElem = screen.getByTestId('label')
        expect(labelElem).toBeInTheDocument()
    })
})
