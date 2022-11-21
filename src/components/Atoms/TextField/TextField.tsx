type textFieldProps = {
    type : string,
    placeHolder : string,
    name : string,
    actionFunction : any
}

export const TextField = (props: textFieldProps) => {
    return (
        <input type={props.type} placeholder={props.placeHolder}  name={props.name} onChange={props.actionFunction}/>
    )
}
