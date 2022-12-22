import { RegisterText } from "./RegisterText"
import { cleanup, render, screen } from '@testing-library/react'


describe('when login page renders', () => {

    afterEach(() => {
        cleanup();
    })

    it('renders component properly', () => {
        render(<RegisterText text={'account?'} />)

        const linkElem = screen.getByText('account?')

        expect(linkElem).toBeInTheDocument();
    })
})
