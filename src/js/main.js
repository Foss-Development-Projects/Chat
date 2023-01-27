var msgInputBox = document.getElementById("chat-text-msg-input")
var chatBox = document.getElementById("chat-section-container")
var msgInputPlaceholder = document.getElementById("msg-input-placeholder")

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
