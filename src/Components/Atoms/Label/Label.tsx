interface LabelProps {
    iconClasses: string;
}

export const Label = (props: LabelProps) => {
    const classes = props.iconClasses.split(" ")

    return <i className={classes.join(" ")} data-testid='label'></i>
}
