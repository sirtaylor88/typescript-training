import { log, chats } from "./chats.js";
const button = document.getElementById("enable-button");
button.addEventListener("click", () => {
    window.supportAI.enableAutoReply();
});
log(chats);
