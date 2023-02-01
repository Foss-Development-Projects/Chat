
import Placeholder from "./modules/Placeholder";
import InputText from "./modules/inputText";
import Emoji from "./modules/Emoji";
import NavMenu from "./modules/NavMenu";

const msgInputTextArea = document.getElementById("msg-textarea")
const msgInputBox = document.getElementById("chat-text-msg-input")
const msgInputContainer = document.getElementById("msg-input-container")
const msgInputPlaceholder = document.getElementById("msg-input-placeholder");
const emojiMenu = document.getElementById("emoji-menu")
const navMenu = document.getElementById("nav-menu")
const toggleNavMenuButton = document.getElementById("toggle-nav-menu-button")
const emojiMenuButton = document.getElementById("emoji-menu-button")

NavMenu(toggleNavMenuButton, navMenu)
InputText(msgInputTextArea, msgInputBox, msgInputContainer)
Placeholder(msgInputBox, msgInputPlaceholder)
Emoji(emojiMenu, emojiMenuButton, msgInputBox)