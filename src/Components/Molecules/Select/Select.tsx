import { Label } from "@Components/Atoms/Label/Label"
import { Option } from "@Components/Atoms/Option/Option"
import { selectProps } from "@Interfaces/molecule-interfaces"

export const Select = (props: selectProps) => {
    return (
        <div className="select-container">
            <span className="label-wrapper">
                <Label iconClasses="fa-solid fa-globe" />
            </span>
            <select className="select" name="countries" id="">
                {props.options.map((answer, key) => {
                    return <Option key={key} optionValue={answer} />
                })}
            </select>
        </div>
    )
}
