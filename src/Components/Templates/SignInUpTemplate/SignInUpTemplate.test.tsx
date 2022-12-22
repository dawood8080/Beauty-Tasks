import { SignInUpTemplate } from "./SignInUpTemplate"
import { cleanup, fireEvent, render } from '@testing-library/react'

describe('when renders the page', () => {
    afterEach(() => {
        cleanup();
    })

    it('renders component properly', () => {
        const renderWrapper = render(<SignInUpTemplate />)

        const mainImage = renderWrapper.getByTestId('main-image')
        const currForm = renderWrapper.getByRole('form')
        const backgroundImg = renderWrapper.getByRole('img')

        expect(mainImage).toBeInTheDocument()
        expect(currForm).toBeInTheDocument()
        expect(backgroundImg).toBeInTheDocument()
    })

    it('changes the form when the user click on the prevPage link from login to registration', () => {
        const renderWrapper = render(<SignInUpTemplate />)

        fireEvent.click(renderWrapper.getByText('Register Here!'))

        expect(renderWrapper.getByText('Registration')).toBeInTheDocument()
    })

    it('changes the form when the user click on the prevPage link from registration to login', () => {
        const renderWrapper = render(<SignInUpTemplate />)

        fireEvent.click(renderWrapper.getByText('Register Here!'))
        fireEvent.click(renderWrapper.getByText('Back to Login'))

        expect(renderWrapper.getByText('Member Login')).toBeInTheDocument()
    })
})
