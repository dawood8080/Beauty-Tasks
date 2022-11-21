type registerTextProps = {
    text: string
}

export const RegisterText = (props: registerTextProps) => {
    return (
        <span className="register-text">{props.text}</span>
    )
}
