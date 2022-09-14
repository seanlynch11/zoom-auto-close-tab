function closeThisTabNow() {
  chrome.runtime.sendMessage({ closeZoomTab: true });
}

setTimeout(closeThisTabNow, 2000);
