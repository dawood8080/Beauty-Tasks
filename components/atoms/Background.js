export class Background{
    #backgroundImage;
    constructor(){
        this.#backgroundImage = document.createElement('img');
        this.#backgroundImage.src = './images/pageImage.jpg';
        this.#backgroundImage.classList.add('background-image');
    }

    get background(){
        return this.#backgroundImage;
    }
}
