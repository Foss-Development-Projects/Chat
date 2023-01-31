const msgInputTextArea = document.getElementById("msg-textarea")
const msgInputBox = document.getElementById("chat-text-msg-input")
const InputText = () => {
	msgInputBox.addEventListener("input", () => {
		msgInputTextArea.value = msgInputBox.textContent;
		console.log(msgInputTextArea.value)
	})
}
export default InputText;