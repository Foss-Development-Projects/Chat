const msgInputBox = document.getElementById("chat-text-msg-input")
const chatBox = document.getElementById("chat-section-container")
const msgInputPlaceholder = document.getElementById("msg-input-placeholder")

const Placeholder = (inputArea, inputAreaPlaceholder) => {
	if (inputArea.textContent.length > 0) {
		inputAreaPlaceholder.style.opacity = "0";
	}
	else {
		inputAreaPlaceholder.style.opacity = "1";
	}
	inputArea.addEventListener('input', () => {
		if (inputArea.textContent.length > 0) {
			inputAreaPlaceholder.style.opacity = "0";
		}
		else {
			inputAreaPlaceholder.style.opacity = "1";
		}
	})
}

export default Placeholder;