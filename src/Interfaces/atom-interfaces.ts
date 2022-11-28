import { buttonType, prevLink } from "@Enums/enums"

interface buttonProps { // name starts with Capital letter 
    text: buttonType;
    type: string;
}

interface LabelProps {
    iconClasses: string;
}

interface OptionProps {
    optionValue: string;
}

interface prevLinkProps {
    type: string;
    text: prevLink;
    prevForm: string;
    switchForm: (value: string) => void;
}

interface registerTextProps {
    text: string;
}

interface textFieldProps {
    type: string;
    placeHolder: string;
    name: string;
    actionFunction: any;
    value?: string;
}

interface titleProps {
    text: string;
}

interface validationTextProps {
    text?: string;
    messageColor?: string;
}

export type {
    buttonProps,
    LabelProps,
    OptionProps,
    prevLinkProps,
    registerTextProps,
    textFieldProps,
    titleProps,
    validationTextProps,
}
