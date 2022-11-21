type buttonProps = {
    text: string,
    actionName: () => void
}

export const Button = (props: buttonProps) => {
    return (
        <button type='button' onClick={props.actionName} >{props.text}</button>
    )
}
