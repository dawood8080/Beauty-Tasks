import React from "react"

type counterProps = {
    optionValue: string
}

export const Option = (props: counterProps) => {
    return (
        <option className='country-option' value={props.optionValue}>{props.optionValue}</option>
    )
}
