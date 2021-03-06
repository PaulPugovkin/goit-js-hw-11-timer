export default class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.setTimerDeadline();
    }

    useMarkup() {
            const selectorElement = document.querySelector(this.selector)

            const days = selectorElement.querySelector('[data-value="days"]');
            const hours = selectorElement.querySelector('[data-value="hours"]');
            const mins = selectorElement.querySelector('[data-value="mins"]');
            const secs = selectorElement.querySelector('[data-value="secs"]');

        return {days, hours, mins, secs}
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

    calculateTimeValues(time) {
        const day = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hour = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minute = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const second = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { day, hour, minute, second };
    }

    setTimerDeadline() {
        const targetTime = this.targetDate.getTime();
        const markup = this.useMarkup();

        setInterval(() => {
            const currentTime = Date.now();
            const timeToDeadline = targetTime - currentTime;
            const deadline = this.calculateTimeValues(timeToDeadline)
            this.updateMarkupSelector(markup, deadline)
        }, 1000)
    }
    updateMarkupSelector({ days, hours, mins, secs }, { day, hour, minute, second }) {
        days.textContent = `${day}`;
        hours.textContent = `${hour}`;
        mins.textContent = `${minute}`;
        secs.textContent = `${second}`;
    }
}
