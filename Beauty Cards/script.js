const mainDiv = document.querySelector('.main-container');
let cardsCounter = 0;
let colors = [];
const colorList = ['Geebung','Spring Green', 'Amazon', 'Atlantis','Jazzberry Jam','Pomegranate','Ice Cold','Corn','Canary', 'Razzle Dazzle Rose', 'Oslo Gray', 'Navy Blue'];
const colorHex = ['#D1801C','#32F867','#347F51','#93C826','#CD4877','#F73523','#9BF0E1','#D5BE05','#332EFE','#F732C9','#7C8D93','#0F57DF'];

class Card {
    constructor(cardData, color) {
        this.card = document.createElement('div');

        const colorImage = document.createElement('img');
        const cardInfo = document.createElement('div');
        const cardTitle = document.createElement('h3');
        const cardDescription = document.createElement('span');
        const button = document.createElement('button');

        this.card.classList.add('card');
        colorImage.classList.add('color-image');
        cardInfo.classList.add('card-info');
        cardTitle.classList.add('card-title');
        cardDescription.classList.add('card-description');
        button.classList.add('button');
        button.addEventListener('click', this.changeCardStatus);

        colorImage.style.backgroundColor = color;

        cardTitle.textContent = cardData.title;
        cardDescription.textContent = cardData.title;
        button.textContent = 'Button';

        cardInfo.appendChild(cardTitle);
        cardInfo.appendChild(cardDescription);
        this.card.appendChild(colorImage);
        this.card.appendChild(cardInfo);
        this.card.appendChild(button);
    }

    changeCardStatus = event => {
        const currButton = event.currentTarget;
        const currCard = currButton.parentNode;

        this.addRemoveCard(
            currCard,
            currCard.classList.contains('added-card')?'remove':'add'
            );
        };

    addRemoveCard = (requiredCard, type) => {
        const cardCounterText = document.querySelector('.count-cards');
        const selectedColors = document.querySelector('.selected-colors');
        const currIndex = Array.from(requiredCard.parentNode.children).indexOf(requiredCard);

        if (type === 'add') {
            requiredCard.classList.add('added-card');
            cardsCounter++;
            cardCounterText.innerHTML = `Count of Selected Cards: ${cardsCounter}`;
            colors.push(colorList[currIndex]);
            selectedColors.innerHTML = `Selected Colors:${colors.join(', ').replace(/, ([^,]*)$/,' and $1.')}`;
        } else {
            requiredCard.classList.remove('added-card');
            cardsCounter--;
            cardCounterText.innerHTML = `Count of Selected Cards: ${cardsCounter}`;
            colors.splice(colors.indexOf(colorList[currIndex]),1);
            selectedColors.innerHTML = `Selected Colors:${colors.join(', ').replace(/, ([^,]*)$/,' and $1.')}`;
        }
    }

    getCard(){
        return this.card;
    }
}

class Header {
    constructor(){
        this.mainHeader = document.createElement('div');
        const userName = document.createElement('span');
        const cardCounter = document.createElement('span');
        const selectedColors = document.createElement('span');

        this.mainHeader.classList.add('header');
        userName.classList.add('user-name');
        cardCounter.classList.add('count-cards');
        selectedColors.classList.add('selected-colors');

        userName.textContent = 'Dawood Abu Swai';
        cardCounter.textContent = 'Count of Selected Cards:0';
        selectedColors.textContent = 'Selected Colors:';

        this.mainHeader.appendChild(userName);
        this.mainHeader.appendChild(cardCounter);
        this.mainHeader.appendChild(selectedColors);
    }

    getMainHeader(){
        return this.mainHeader;
    }
}
class CardsGenerator {
    constructor() {
        this.cardsContainer = document.createElement('div');
        this.cardsContainer.classList.add('cardsContainer');

        this.fetchCardsData().then((data) => {
            data.forEach((card, index) => {
                if(index > 11) {
                    return;
                }
                this.cardsContainer.append(new Card(card, colorHex[index]).getCard());
            });
        });
    }

    fetchCardsData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const data = await response.json();

            return data;
        } catch(error) {
            console.log('Error getting the required data');

            return [];
        }
    };

    getCardsContainer(){
        return this.cardsContainer;
    }
}

class PageContent {
    constructor() {
        document.body.appendChild(new Header().getMainHeader());
        document.body.appendChild(new CardsGenerator().getCardsContainer());
    }
}

const mainPage = new PageContent();
