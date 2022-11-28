interface loginContainerProps {
    switchContent: (value: string) => void;
}
interface objectStringKey {
    [key: string]: string;
}

interface registerContainerProps {
    switchContent: (value: string) => void;
}

export type { loginContainerProps, objectStringKey, registerContainerProps }
