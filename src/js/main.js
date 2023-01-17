const msgInputBox = document.getElementById("chat-text-msg-input")
// const chatBox = document.getElementById("chat-section-container")

// msgBox.addEventListener('input', () => {
// 	if(msgBox.clientHeight > 200){
// 		msgBox.style.height = 200;
// 	}
// 	else {
// 		msgBox.style.height = "30px";
//     	msgBox.style.height = (msgBox.scrollHeight)+"px";
// 	}
	
// })

let msgBox = window.getComputedStyle(document.getElementById('chat-text-msg-input'), ':after');

if(msgBox.length > 0){
	msgBox = "";
}