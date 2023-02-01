
import Placeholder from "./modules/Placeholder";
import InputText from "./modules/inputText";
import Emoji from "./modules/Emoji";

const msgInputTextArea = document.getElementById("msg-textarea")
const msgInputBox = document.getElementById("chat-text-msg-input")
const msgInputContainer = document.getElementById("msg-input-container")
const msgInputPlaceholder = document.getElementById("msg-input-placeholder");
const emojiMenu = document.getElementById("emoji-menu")
const emojiMenuButton = document.getElementById("emoji-menu-button")


InputText(msgInputTextArea, msgInputBox, msgInputContainer)
Placeholder(msgInputBox, msgInputPlaceholder)
Emoji(emojiMenu, emojiMenuButton, msgInputBox)