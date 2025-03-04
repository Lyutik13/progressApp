export function createProgressBlock(container) {
	container.innerHTML = `
      <h3 class="progressBlock-text">Progress</h3>

			<div class="progress">
				<svg class="progress-ring" width="100%" height="100%">
					<circle
						class="progress-ring__background"
						cx="60"
						cy="60"
						r="50"
						fill="none"
						stroke="#E0E0E0"
						stroke-width="10"
					/>
					<circle
						class="progress-ring__value"
						cx="60"
						cy="60"
						r="50"
						fill="none"
						stroke="#007BFF"
						stroke-width="10"
						stroke-dasharray="314.2"
						stroke-dashoffset="314.2"
					/>
				</svg>
			</div>

			<div class="controls">
				<div class="value-wrapper">
          <input type="number" id="valueInput" min="0" max="100" value="0" />
          <label>Value</label>
			  </div>

				<label class="toggle-container">
					<input class="input-btn" style="display: none" type="checkbox" id="animateToggle" />
					<span class="toggle"></span>
					Animate
				</label>

				<label class="toggle-container">
					<input class="input-btn" style="display: none" type="checkbox" id="hideToggle" />
					<span class="toggle"></span>
					Hide
				</label>
			</div>
  `;

	const progressRing = container.querySelector(".progress-ring");
	const progressRingValue = container.querySelector(".progress-ring__value");

	function setValue(value) {
		if (value > 100) {
			value = 100;
		}
		const maxDash = 314.2;
		const dashOffset = maxDash - (value / 100) * maxDash;
		progressRingValue.style.strokeDashoffset = dashOffset;
	}

	function setAnimate(state) {
		progressRing.classList.toggle("animated", state);
	}

	function setVisible(state) {
		const progressContainer = container.querySelector(".progress");
		progressContainer.style.display = state ? "block" : "none";
	}

	return { setValue, setAnimate, setVisible };
}
