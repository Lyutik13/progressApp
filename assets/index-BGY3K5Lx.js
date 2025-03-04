(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function g(t){t.innerHTML=`
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
  `;const r=t.querySelector(".progress-ring"),i=t.querySelector(".progress-ring__value");function o(n){n>100&&(n=100);const l=314.2,c=l-n/100*l;i.style.strokeDashoffset=c}function e(n){r.classList.toggle("animated",n)}function s(n){const l=t.querySelector(".progress");l.style.display=n?"block":"none"}return{setValue:o,setAnimate:e,setVisible:s}}const a=g(document.getElementById("progressBlock"));document.getElementById("valueInput").addEventListener("input",t=>{let r=t.target.value;r=r.replace(/^0+/,""),r!==""&&parseInt(r,10)>100?t.target.value="100":t.target.value=r,a.setValue(parseInt(t.target.value,10)||0)});document.getElementById("animateToggle").addEventListener("change",t=>{a.setAnimate(t.target.checked)});document.getElementById("hideToggle").addEventListener("change",t=>{a.setVisible(!t.target.checked)});
