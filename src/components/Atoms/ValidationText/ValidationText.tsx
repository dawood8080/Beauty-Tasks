type validationTextProps = {
    text: string
}

export const ValidationText = (props: validationTextProps) => {
    <span className="validation-text">{props.text}</span>
}
