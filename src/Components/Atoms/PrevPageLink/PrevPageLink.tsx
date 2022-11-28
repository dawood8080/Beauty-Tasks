import { prevLinkProps } from "@Interfaces/atom-interfaces"

export const PrevPageLink = (props: prevLinkProps) => {
    return (
        <a
            className={`${props.type}-link`}
            onClick={() => props.switchForm(props.prevForm)}
            href="#/"
        >
            {props.text}
        </a>
    )
}
