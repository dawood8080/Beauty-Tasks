import { titleProps } from "@Interfaces/atom-interfaces"

export const Title = (props: titleProps) => {
    return <h2 className="form-title">{props.text}</h2>
}
