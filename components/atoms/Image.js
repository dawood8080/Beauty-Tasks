export class Image{
    #image;
    constructor(){
        this.#image = document.createElement('div');
        this.#image.classList.add('main-image');
    }

    get image(){
        return this.#image;
    }
}
