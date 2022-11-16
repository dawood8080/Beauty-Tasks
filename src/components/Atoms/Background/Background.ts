export class Background{
    private _backgroundImage: HTMLImageElement
    constructor(){
        this._backgroundImage = document.createElement('img')
        this._backgroundImage.src = '../../../../Assets/images/pageImage.jpg'
        this._backgroundImage.classList.add('background-image')
    }

    get background(){
        return this._backgroundImage
    }
}
