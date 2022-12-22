import { MainPage } from "./MainPage"
import { cleanup, render } from '@testing-library/react'

describe('when renders the app', () => {
    afterEach(() => {
        cleanup();
    })

    it('renders component properly', () => {
        const renderWrapper = render(<MainPage />)

        const mainImage = renderWrapper.getByTestId('main-image')
        const currForm = renderWrapper.getByRole('form')
        const backgroundImg = renderWrapper.getByRole('img')

        expect(mainImage).toBeInTheDocument()
        expect(currForm).toBeInTheDocument()
        expect(backgroundImg).toBeInTheDocument()
    })
})
