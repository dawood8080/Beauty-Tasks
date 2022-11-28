export interface mainInputProperties {
    label: string;
    name: string;
    placeHolder: string;
    type: string;
    validation?(arg0: HTMLInputElement, arg1?: HTMLInputElement): boolean;
}
