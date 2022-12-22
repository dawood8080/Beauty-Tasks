import {Meta, Story} from "@storybook/react";
import { MainUserInputContainer } from './MainUserInputContainer'
import { validationError, icons } from '../../../Constants/displayed-text'
import "./MainUserInputContainer.css"

interface mainInputProps {
    actionFunction: (a: InputEvent) => void;
    error?: string;
    labelName: string;
    messageColor?: string;
    name: string;
    placeHolder: string;
    type?: string;
    value?: string;
    autoComplete: string
}

export default {
    title: "Input Field",
    component: MainUserInputContainer,
} as Meta

const Template2: Story<mainInputProps> = ({...args}) => <MainUserInputContainer {...args}/>

export const userInputField = Template2.bind({});

userInputField.args = {
    actionFunction: () => { console.log('ddd'); },
    error: validationError.invalidEmail,
    labelName: icons.user,
    name: "firstName",
    placeHolder: "Your first name",
    type: "text",
    value: "name",
    autoComplete: 'on'
}
