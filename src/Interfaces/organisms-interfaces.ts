interface loginContainerProps {
    switchContent: (value: string) => void;
}

interface InputDataInt {
    [key: string]: string;
}

interface registerContainerProps {
    switchContent: (value: string) => void;
}

export type { loginContainerProps, InputDataInt, registerContainerProps }
