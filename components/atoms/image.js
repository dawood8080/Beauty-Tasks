export class Image{
    constructor(source){
        this.image = document.createElement('div');
        this.image.classList.add('main-image');
    }

    get givenImage(){
        return this.image;
    }
}
