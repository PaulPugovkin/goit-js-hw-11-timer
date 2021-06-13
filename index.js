import CountdownTimer from './timer.js';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('July 07, 2021'),
});

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('July 01, 2021')
})





