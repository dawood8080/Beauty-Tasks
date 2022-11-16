export class Image{
    private _image: HTMLDivElement
    constructor(){
        this._image = document.createElement('div')
        this._image.classList.add('main-image')
    }

    get image(){
        return this._image
    }
}
