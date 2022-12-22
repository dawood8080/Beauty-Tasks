interface mainInputProps {
    actionFunction: (a: InputEvent) => void;
    error?: string;
    labelName: string;
    messageColor?: string;
    name: string;
    placeHolder: string;
    type: string; // Can be optional and the default value is text
    value?: string;
}

interface registerIndicatorProps {
    text: string;
    switchForm: (value: string) => void;
}

interface selectProps {
    options: string[]; // Interface for option, array of that interface
}

interface textInfoProps {
    type: string;
    placeHolder: string;
    name: string;
    labelName: string;
    actionFunction?: (a: InputEvent) => void;
    value?: string;
}

export type {
    mainInputProps,
    registerIndicatorProps,
    selectProps,
    textInfoProps,
}
