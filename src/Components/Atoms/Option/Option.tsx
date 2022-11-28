import { OptionProps } from "@Interfaces/atom-interfaces"

export const Option = (props: OptionProps) => {
    return (
        <option className="country-option" value={props.optionValue}>
            {props.optionValue}
        </option>
    )
}
