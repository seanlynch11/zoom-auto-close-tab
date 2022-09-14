chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.closeZoomTab) {
    chrome.tabs.remove(sender.tab.id);
  }
});
