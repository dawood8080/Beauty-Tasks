import {Meta, Story} from "@storybook/react";
import { Button } from './Button'
import { buttonType } from "../../../Strings/enums";
interface ButtonProps {
    text: buttonType;
}

export default {
    title: "Button",
    component: Button,
} as Meta

const Template:Story<ButtonProps> = (args) => <Button {...args}/>

export const singInButton = Template.bind({})

singInButton.args = {
    text: buttonType.login
}
