import InputField from "./modules/inputField";
import InputText from "./modules/inputText";
import * as emoji from 'emoji-api'

const msgInputBox = document.getElementById("chat-text-msg-input")
const msgInputTextArea = document.getElementById("msg-textarea")
const msgInputContainer = document.getElementById("msg-input-container");

let list = document.getElementById("emoji-menu")

window.addEventListener('DOMContentLoaded', () => {
	msgInputContainer.style.width = `${window.innerWidth - 135 + "px"}`;
	console.log(window.innerWidth)
})
window.addEventListener('resize', () => {
	msgInputContainer.style.width = `${window.innerWidth - 135 + "px"}`;
})

const Emojis = async (range) => {

	for(let i=0; i < range; i++){
		let span = document.createElement("span")
		span.textContent = emoji.all()[i]._data.emoji
		span.setAttribute("onclick", "insertEmoji")
		list.appendChild(span)
	}
}

const insertEmoji = (e) => {
	msgInputBox.textContent = msgInputBox.textContent + e.target.textContent;
}

Emojis(100);
InputField();