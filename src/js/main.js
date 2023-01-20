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
	if (msgInputBox.clientHeight > 200) {
		msgInputBox.style.height = 200;
	}
	else {
		msgInputBox.style.height = "30px";
		msgInputBox.style.height = (msgInputBox.scrollHeight) + "px";
	}
	
})
