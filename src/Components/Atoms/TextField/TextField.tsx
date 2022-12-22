interface textFieldProps {
    type: string;
    placeHolder: string;
    name: string;
    actionFunction: any;
    value?: string;
    autoComplete: string
}

export const TextField = (props: textFieldProps) => {
    return (
        <input
            className="text-field"
            name={props.name}
            onChange={props.actionFunction}
            placeholder={props.placeHolder}
            type={props.type}
            value={props.value}
            autoComplete={props.autoComplete}
        />
    )
}
