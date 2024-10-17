// Here you can access the DOM

const button = document.getElementById("sidepanel-button");

button.addEventListener("click", () => {
  chrome.runtime.sendMessage({ openSidePanel: true });
});
