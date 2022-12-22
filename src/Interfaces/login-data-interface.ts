export interface inputLoginProperties {
    iconType: string;
    name: string;
    placeHolder: string;
    type: string;
    validation?(arg0: HTMLInputElement): boolean;
}
