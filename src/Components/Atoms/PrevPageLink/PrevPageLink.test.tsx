import { PrevPageLink } from "./PrevPageLink"
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { prevLink, formType } from "@Strings/enums";
import { vi } from 'vitest'


describe('when the form renders', () => {
    afterEach(() => {
        cleanup()
        vi.clearAllMocks()
    })

    const changeForm = vi.fn()

    it('renders component properly', () => {
        render(<PrevPageLink
            type={'login'}
            text={prevLink.SignUp}
            prevForm={formType.login}
            switchForm={changeForm}
        />)

        const linkElem = screen.getByText('Register Here!')

        expect(linkElem).toBeInTheDocument();
    })

    it('should respond to onClick function', async() => {
        render(<PrevPageLink
            type={'login'}
            text={prevLink.SignUp}
            prevForm={formType.singUp}
            switchForm={changeForm}
        />)

        fireEvent.click(screen.getByText('Register Here!'))

        expect(changeForm).toHaveBeenCalledTimes(1)
        expect(changeForm).toBeCalledWith(formType.singUp)
    })
})
