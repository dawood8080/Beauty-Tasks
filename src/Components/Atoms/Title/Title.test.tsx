import { Title } from "./Title"
import { cleanup, render, screen } from '@testing-library/react'

describe('<Title />', () => {
    afterEach(() => {
        cleanup();
    })

    it('renders component properly', () => {
        render(<Title text='title' />)

        const titleElem = screen.getByText('title')

        expect(titleElem).toBeInTheDocument();
    })

    it('should have the correct class name', () => {
        render(<Title text='title' />)

        const titleElem = screen.getByText('title')

        expect(titleElem).toHaveClass('form-title')
    })

})
