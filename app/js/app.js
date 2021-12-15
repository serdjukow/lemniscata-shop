// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
	const soundAudio = document.getElementById("audio-track");
	const audioIcon = document.getElementById("audio-icon");
	const audioButton = document.getElementById("audio-button");
	let time = document.querySelector(".audio__time");
	const audioInfo = document.querySelector(".audio-info");
	let audioPlay = setInterval;
	const audioTitle = document.querySelector(".audio__title");

	audioButton.addEventListener("click", () =>
		audioButton.classList.contains("play") ? soundPause() : soundPlay()
	);

	function soundPlay() {
		soundAudio.play();
		audioButton.classList.add("play");
		audioInfo.classList.add("marquee");
		audioIcon.src = "http://localhost:3000/images/dist/icons/pause.svg";
		audioPlay = setInterval(function () {
			let audioTime = Math.round(soundAudio.currentTime);
			let audioLength = Math.round(soundAudio.duration);
			time.style.width = (audioTime * 100) / audioLength + "%";
		}, 10);
	}

	function soundPause() {
		soundAudio.pause();
		audioButton.classList.remove("play");
		audioInfo.classList.remove("marquee");
		audioIcon.src = "http://localhost:3000/images/dist/icons/play.svg";
		clearInterval(audioPlay);
	}

	soundAudio.onended = function () {
		audioButton.classList.remove("play");
		audioInfo.classList.remove("marquee");
		audioIcon.src = "http://localhost:3000/images/dist/icons/play.svg";
		clearInterval(audioPlay);
		time.style.width = 0;
	};

	const text = document.getElementById("text");

	animate(text);

	function animate(element) {
		let elementWidth = element.offsetWidth;
		let parentWidth = element.parentElement.offsetWidth;
		let flag = 0;

		setInterval(() => {
			element.style.marginLeft = --flag + "px";

			if (elementWidth == -flag) {
				flag = parentWidth;
			}
		}, 10);
	}
});
