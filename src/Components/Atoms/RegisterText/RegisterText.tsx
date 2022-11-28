import { registerTextProps } from "@Interfaces/atom-interfaces"

export const RegisterText = (props: registerTextProps) => {
    return <span className="register-text">{props.text}</span>
}
