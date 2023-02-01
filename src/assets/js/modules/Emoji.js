import { Picker } from 'emoji-mart'

const Emoji = async (dom, btn, inputArea) => {
	const picker = new Picker({ onEmojiSelect:console.log, set: 'google', })
	await dom.appendChild(picker)
	btn.addEventListener('click', () => {
		dom.classList.toggle('show-emoji-menu')
	})
	inputArea.addEventListener('focus', () => {
		dom.className = "emoji-menu";
	})
	console.log(picker.native)
}
export default Emoji;