import { Label } from "@Components/Atoms/Label/Label"

interface selectProps {
    options: string[];
}

export const Select = (props: selectProps) => {
    return (
        <div className="select-container" data-testid='select-wrapper'>
            <span className="label-wrapper">
                <Label iconClasses="fa-solid fa-globe" />
            </span>
            <select className="select" name="countries">
                {props.options.map((country, key) => {
                    return (
                        <option value={country} key={key}>
                            {country}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}
