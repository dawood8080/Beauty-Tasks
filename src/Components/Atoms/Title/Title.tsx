interface titleProps {
    text: string;
}

export const Title = (props: titleProps) => {
    return <h2 className="form-title">{props.text}</h2>
}
