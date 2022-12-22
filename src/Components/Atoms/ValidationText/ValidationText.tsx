interface validationTextProps {
    text?: string;
}

export const ValidationText = (props: validationTextProps) => {
    return (
        <p
            className="validation-text"
            data-testid='error-message'
        >
            {props.text}
        </p>
    )
}
