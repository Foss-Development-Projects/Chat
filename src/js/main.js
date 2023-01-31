import InputField from "./modules/inputField";
import InputText from "./modules/inputText";

const msgInputBox = document.getElementById("chat-text-msg-input")
const msgInputTextArea = document.getElementById("msg-textarea")
const msgInputContainer = document.getElementById("msg-input-container");

window.addEventListener('DOMContentLoaded', () => {
	msgInputContainer.style.width = `${window.innerWidth - 140 + "px"}`;
	console.log(window.innerWidth)
})
window.addEventListener('resize', () => {
	msgInputContainer.style.width = `${window.innerWidth - 140 + "px"}`;
})
InputField();