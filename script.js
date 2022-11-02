class Hour {
    #currHour;
    constructor(time){
        this.#currHour = time;
        this.hourLine = document.createElement('div');
        const line = document.createElement('div');

        line.classList.add('hour-line');
        this.hourLine.classList.add('hour-line-container');
        this.hourLine.appendChild(line);
    }

    get Hour(){
        return this.#currHour;
    }

    get Container(){
        return this.hourLine;
    }
}

class Minute {
    #currMinute;
    constructor(time){
        this.#currMinute = time;
        this.minuteLine = document.createElement('div');
        const line = document.createElement('div');

        line.classList.add('minute-line');
        this.minuteLine.classList.add('minute-line-container');
        this.minuteLine.appendChild(line);
    }

    get Minute(){
        return this.#currMinute;
    }

    get Container(){
        return this.minuteLine;
    }
}

class Seconds {
    #currSecond;
    constructor(time){
        this.#currSecond = time;
        this.secondLine = document.createElement('div');
        const line = document.createElement('div');

        line.classList.add('seconds-line');
        this.secondLine.classList.add('second-line-container');
        this.secondLine.appendChild(line);
    }

    get Second(){
        return this.#currSecond;
    }

    get Container(){
        return this.secondLine;
    }
}

class Clock {
    constructor(){
        const timeNow = new Date();

        this.clock = document.createElement('div');
        this.clock.classList.add('clock-container');

        const elements = [
            {element:'div', class:'clock-center'},
            {element:'h2', class:'twelve', text: '12'},
            {element:'h2', class:'three', text: '3'},
            {element:'h2', class:'six', text:'6'},
            {element:'h2', class:'nine', text:'9'},
        ]

        elements.forEach((currElement) => {
            const temp = document.createElement(currElement.element);
            temp.classList.add(currElement.class);
            temp.textContent = currElement.text??'';
            this.clock.appendChild(temp);
        })

        const hour = new Hour(timeNow.getHours());
        const minute = new Minute(timeNow.getMinutes());
        const second = new Seconds(timeNow.getSeconds());

        const currHour = hour.Hour;
        const currMinute = minute.Minute;
        const currSecond= second.Second;

        this.clock.appendChild(hour.Container);
        this.clock.appendChild(minute.Container);
        this.clock.appendChild(second.Container);

        this.currDegree(currHour, currMinute, currSecond)

        document.body.appendChild(this.clock);
    }

    currDegree = (currHour, currMinute, currSecond) =>{
        const currSecondDeg = ((currSecond/60) * 360) - 90;
        const currMinuteDeg = ((currMinute/60) * 360) - 90;
        const currHourDeg = ((currHour-3)*30) + (((currMinuteDeg+90)/360)*30);

        document.querySelector(':root').style.setProperty('--current-hour-degree', `${currHourDeg}deg`);
        document.querySelector(':root').style.setProperty('--current-minute-degree', `${currMinuteDeg}deg`);
        document.querySelector(':root').style.setProperty('--current-second-degree', `${currSecondDeg}deg`);

        document.querySelector(':root').style.setProperty('--hour-animation-duration', `${(12 -(currHour%12))*60*60}s`);
        document.querySelector(':root').style.setProperty('--minute-animation-duration', `${(60-currMinute)*60}s`);
        document.querySelector(':root').style.setProperty('--second-animation-duration', `${60-currSecond}s`);
    }
}

const temp = new Clock();
