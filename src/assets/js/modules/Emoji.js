import { Picker } from 'emoji-mart'

const getEmoji = (e) => {
	return e.native;
}
const Emoji = async (dom, btn, inputArea, emojiPicker) => {
	let a = {}
	const pickerOptions = { onEmojiSelect: getEmoji(e), set: 'google', }
	const picker = new Picker(pickerOptions)
	await dom.appendChild(picker)
	btn.addEventListener('click', () => {
		dom.classList.toggle('show-emoji-menu')
		console.log(a)
	})
	inputArea.addEventListener('focus', () => {
		dom.className = "emoji-menu";
	})
	emojiPicker.addEventListener("select", () => {
		console.log(getEmoji(e))
	})
}
export default Emoji;