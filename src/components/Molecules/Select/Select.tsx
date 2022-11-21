import { Label } from '../../Atoms/Label/Label'
import { Option } from '../../Atoms/Option/Option'

type selectProps = {
    options: string[]
}

export const Select = (props: selectProps) => {
    return (
        <div className="select-container">
            <span className="label-wrapper">
                <Label iconClasses='fa-solid fa-globe' />
            </span>
            <select className='select' name="countries" id="">
                {
                    props.options.map((answer, key) => {
                        return (<Option key={key} optionValue={answer}/>)
                    })
                }
            </select>
        </div>
    )
}
