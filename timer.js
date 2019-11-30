class Timer {
	constructor(durationInput, startBtn, pauseBtn, callbacks) {
		this.durationInput = durationInput;
		this.startBtn = startBtn;
		this.pauseBtn = pauseBtn;

		this.startBtn.addEventListener('click', this.start);
		this.pauseBtn.addEventListener('click', this.pause);
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}
	}

	start = () => {
		if (this.onStart) {
			this.onStart();
		}
		this.tick();
		this.interval = setInterval(this.tick, 1000);
	};

	tick = () => {
		console.log(this.timeRemaining);
		if (this.timeRemaining <= 0) {
			if (this.onComplete) {
				this.onComplete();
			}
			this.pause();
		} else {
			if (this.onTick) {
				this.onTick();
			}
			this.timeRemaining = this.timeRemaining - 1;
		}
	};

	pause = () => {
		clearInterval(this.interval);
	};

	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}

	set timeRemaining(time) {
		this.durationInput.value = time;
	}
}
