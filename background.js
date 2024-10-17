chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.openSidePanel === true) {
    // chrome.sidePanel.open({ windowId: tabs[0].windowId });
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.sidePanel.open({ windowId: tabs[0].windowId });
    });
  }
});
