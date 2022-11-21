type CounterProps = {
    iconClasses: string
}

export const Label = (props: CounterProps) => {
    const classes = props.iconClasses.split(' ')
    return (
        <i className={classes.join(' ')}></i>
    )
}
