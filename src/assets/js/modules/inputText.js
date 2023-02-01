const InputText = (txtArea, inputArea, inputContainer) => {
	inputArea.addEventListener("input", () => {
		txtArea.value = inputArea.textContent;
	})
	window.addEventListener('DOMContentLoaded', () => {
		inputContainer.style.width = `${window.innerWidth - 140 + "px"}`;
		console.log(window.innerWidth)
	})
	window.addEventListener('resize', () => {
		inputContainer.style.width = `${window.innerWidth - 140 + "px"}`;
	})
}
export default InputText;