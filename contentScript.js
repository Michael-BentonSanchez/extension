// Here you can access the DOM

const button = document.getElementById("simplify-button");

button.addEventListener("click", () => {
  chrome.runtime.sendMessage({ openSidePanel: true });
});
