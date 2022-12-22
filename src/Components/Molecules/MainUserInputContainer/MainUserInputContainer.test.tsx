import { MainUserInputContainer } from "./MainUserInputContainer"
import { cleanup, render, screen } from '@testing-library/react'
import { vi } from "vitest";


describe('<MainUserInputContainer />', () => {
    beforeEach(() => {
        mockActionOnChange.mockClear()
        render
    })
    afterEach(() => {
        cleanup();
    })

    const mockActionOnChange = vi.fn()

    it('renders component properly', () => {
        render(<MainUserInputContainer
            type='text'
            placeHolder='name'
            name='mockName'
            value='temp'
            actionFunction={mockActionOnChange}
            autoComplete='no'
            labelName='labelClass'
        />)

        const selectWrapper = screen.getByTestId('input-container')

        expect(selectWrapper).toBeInTheDocument();
    })

    it('should have the correct class name', () => {
        render(<MainUserInputContainer
            placeHolder='name'
            name='mockName'
            value='temp'
            actionFunction={mockActionOnChange}
            autoComplete='no'
            labelName='labelClass'
        />)

        const selectWrapper = screen.getByTestId('input-container')

        expect(selectWrapper).toHaveClass('user-input-error-container')
    })

    it('should have 2 children components', () => {
        render(<MainUserInputContainer
            type='text'
            placeHolder='name'
            name='mockName'
            value='temp'
            actionFunction={mockActionOnChange}
            autoComplete='no'
            labelName='labelClass'
        />)

        const selectWrapper = screen.getByTestId('input-container')

        expect(selectWrapper.children).toHaveLength(2)
    })
})
