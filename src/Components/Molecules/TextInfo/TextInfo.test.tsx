import { TextInfo } from "./TextInfo"
import { cleanup, render, screen } from '@testing-library/react'
import { vi } from 'vitest'


describe('<TextInfo />', () => {
    afterEach(() => {
        cleanup();
    })

    const changeInput = vi.fn()

    it('renders component properly', () => {
        render(<TextInfo
            type={'login'}
            placeHolder='temp'
            name='mockName'
            labelName='label-name'
            actionFunction={changeInput}
            autoComplete='no'
        />)

        const linkElem = screen.getByTestId('text-info')

        expect(linkElem).toBeInTheDocument();
    })

    it('should has a class name', async() => {
        render(<TextInfo
            type={'login'}
            placeHolder='temp'
            name='mockName'
            labelName='label-name'
            actionFunction={changeInput}
            autoComplete='no'
        />)

        const linkElem = screen.getByTestId('text-info')

        expect(linkElem).toHaveClass('text-info')
    })

    it('should has 2 children components', () => {
        render(<TextInfo
            type={'login'}
            placeHolder='temp'
            name='mockName'
            labelName='label-name'
            actionFunction={changeInput}
            autoComplete='no'
        />)

        const linkElem = screen.getByTestId('text-info')

        expect(linkElem.children).toHaveLength(2)
    })
})
