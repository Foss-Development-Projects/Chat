const msgInputBox = document.getElementById("chat-text-msg-input")
const chatBox = document.getElementById("chat-section-container")
const msgInputPlaceholder = document.getElementById("msg-input-placeholder")

const InputField = () => {
	if (msgInputBox.textContent.length > 0) {
		msgInputPlaceholder.textContent = "";
	}
	else {
		msgInputPlaceholder.textContent = "Type A Message..."
	}
	msgInputBox.addEventListener('input', () => {
		if (msgInputBox.textContent.length > 0) {
			msgInputPlaceholder.textContent = "";
		}
		else {
			msgInputPlaceholder.textContent = "Type A Message..."
		}
	})

}

export default InputField;