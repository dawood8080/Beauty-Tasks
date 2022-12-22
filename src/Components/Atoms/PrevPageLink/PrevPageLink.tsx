import { formType, prevLink } from "@Strings/enums";

interface prevLinkProps {
    type: string;
    text: prevLink;
    prevForm: formType;
    switchForm: (value: formType) => void;
}

export const PrevPageLink = (props: prevLinkProps) => {
    return (
        <a
            className={`${props.type}-link`}
            href="#/"
            onClick={() => props.switchForm(props.prevForm)}
        >
            {props.text}
        </a>
    )
}
