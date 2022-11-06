export class Background{
    constructor(){
        this.image = document.createElement('img');
        this.image.src = './images/pageImage.jpg';
        this.image.classList.add('background-image');
    }

    get background(){
        return this.image;
    }
}
