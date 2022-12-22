import { Background } from "./Background"
import { cleanup, render, screen } from '@testing-library/react'

describe('when the page renders', () => {
    afterEach(() => {
        cleanup();
    })

    it('renders background properly', async() => {
        render(<Background />)

        const backgroundElem = await screen.findByRole('img')

        expect(backgroundElem).toBeInTheDocument();
    })
})
