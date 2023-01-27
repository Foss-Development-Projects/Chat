var msgInputBox = document.getElementById("chat-text-msg-input")
var chatBox = document.getElementById("chat-section-container")
var msgInputPlaceholder = document.getElementById("msg-input-placeholder")

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