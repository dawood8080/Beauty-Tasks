export class Label{
    constructor(labelClass){
        const isIcon = labelClass.indexOf('fa-') >= 0
        if(isIcon){
            this.label = document.createElement('i');
            const classes = labelClass.split(' ');
            classes.forEach(currClass => {this.label.classList.add(currClass)})
        } else {
            this.label = document.createElement('span');
            this.label.classList.add('label-name');
            this.label.textContent = labelClass
        }
    }

    get currLabel(){
        return this.label;
    }
}
