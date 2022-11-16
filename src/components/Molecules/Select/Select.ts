import { Label } from '../../Atoms/Label/Label'
import { Option } from '../../Atoms/Option/Option'

export class Select{
    private _select : HTMLSelectElement
    private _selectContainer : HTMLDivElement
    constructor(private options: string[]){
        this._selectContainer = document.createElement('div')
        this._select = document.createElement('select')
        const iconContainer = document.createElement('span')
        iconContainer.classList.add('label-wrapper')
        this._selectContainer.classList.add('select-container')
        this._select.classList.add('select')
        this._select.name = 'countries'
        const selectLabel = new Label('fa-solid fa-globe').label
        iconContainer.appendChild(selectLabel)
        this.options.forEach(country => {
            const countryOption = new Option(country).option
            this._select.appendChild(countryOption)
        })

        this._selectContainer.appendChild(iconContainer)
        this._selectContainer.appendChild(this._select)
    }

    get select(){
        return this._selectContainer
    }
}
