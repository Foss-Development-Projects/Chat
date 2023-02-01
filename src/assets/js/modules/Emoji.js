const pickerOptions = { onEmojiSelect: console.log, set: 'google' }
const picker = new EmojiMart.Picker(pickerOptions)
const Emoji = (dom, btn, inputArea) => {
	dom.appendChild(picker)
	btn.addEventListener('click', () => {
		dom.classList.toggle('show-emoji-menu')
	})
	inputArea.addEventListener('focus', () => {
		dom.className = "emoji-menu";
	})
}
export default Emoji;