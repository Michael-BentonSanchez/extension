button = document.getElementById("sidepanel-button");

button.addEventListener("click", () => {
  chrome.sidePanel.open({ windowId: tab.windowId });
});
