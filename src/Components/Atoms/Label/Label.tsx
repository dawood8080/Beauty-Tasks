import { LabelProps } from "@Interfaces/atom-interfaces"

export const Label = (props: LabelProps) => {
    const classes = props.iconClasses.split(" ")
    return <i className={classes.join(" ")}></i>
}
