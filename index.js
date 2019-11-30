let durationInput = document.getElementById('duration');
let startBtn = document.getElementById('start-btn');
let pauseBtn = document.getElementById('pause-btn');

let timer = new Timer(durationInput, startBtn, pauseBtn, {
	onStart() {
		console.log('Timer started');
	},
	onTick() {
		console.log('Timer ticked');
	},
	onComplete() {
		console.log('Timer has finished');
	}
});
