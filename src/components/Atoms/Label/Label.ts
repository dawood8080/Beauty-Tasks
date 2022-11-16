export class Label{
    private _label: HTMLElement
    constructor(private labelClass: string){
        this._label = document.createElement('i')
        const classes = this.labelClass.split(' ')
        classes.forEach(currClass => {this._label.classList.add(currClass)})
    }

    get label(){
        return this._label
    }
}
