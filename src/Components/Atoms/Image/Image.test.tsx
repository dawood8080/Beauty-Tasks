import { Image } from "./Image"
import { cleanup, render, screen } from '@testing-library/react'


describe('when the template renders', () => {
    afterEach(() => {
        cleanup();
    })

    it('renders component properly', () => {
        render(<Image />)
        const imageElem = screen.getByTestId('main-image')
        expect(imageElem).toBeInTheDocument()
    })

    it('has a correct class name', () => {
        render(<Image />)
        const imageElem = screen.getByTestId('main-image')
        expect(imageElem).toHaveClass('main-image')
    })
})
